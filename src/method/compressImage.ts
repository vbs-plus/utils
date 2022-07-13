import getType from "../type/getType";
import dataURLtoBlob from "./dataURLtoBlob";

const getSegments = (arrayBuffer: ArrayBuffer): number[][] => {
  if (!arrayBuffer.byteLength) return [];
  let head = 0;
  let length, endPoint, seg;
  const segments = [];
  const arr = [].slice.call(new Uint8Array(arrayBuffer), 0);
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
  for (; true; ) {
    if (arr[head] === 0xff && arr[head + 1] === 0xda) break;
    if (arr[head] === 0xff && arr[head + 1] === 0xd8) {
      head += 2;
    } else {
      length = arr[head + 2] * 256 + arr[head + 3];
      endPoint = head + length + 2;
      seg = arr.slice(head, endPoint);
      head = endPoint;
      segments.push(seg);
    }
    if (head > arr.length) break;
  }
  return segments;
};

const getEXIF = (segments: number[][]): Array<number> => {
  if (!segments.length) return [];
  let seg: Array<number> = [];
  for (let i = 0; i < segments.length; i++) {
    const item = segments[i];
    if (item[0] === 0xff && item[1] === 0xe1) {
      seg = seg.concat(item);
    }
  }
  return seg;
};

const insertEXIF = (blob: Blob, exif: number[]): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const arr = [].slice.call(new Uint8Array(fileReader.result as ArrayBuffer), 0);
      if (arr[2] !== 0xff || arr[3] !== 0xe0) {
        return reject(new Error("Couldn't find APP0 marker from blob data"));
      }
      const length = arr[4] * 256 + arr[5];
      const newImage = [0xff, 0xd8].concat(exif, arr.slice(4 + length));
      const uint8Array = new Uint8Array(newImage);
      const newBlob = new Blob([uint8Array], { type: "image/jpeg" });
      resolve(newBlob);
    };
    fileReader.onerror = (err) => reject(err);
    fileReader.readAsArrayBuffer(blob);
  });
};

const compressImage = (file: File, quality: number): Promise<Blob | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const img = new Image();
      img.src = fileReader.result as string;
      img.onload = () => {
        const { width, height } = img;
        const canvas = window.document.createElement("canvas");
        const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const fileData = canvas.toDataURL("image/jpeg", quality);
        const fileBlob = dataURLtoBlob(fileData);
        resolve(fileBlob);
      };
      img.onerror = (err) => reject(err);
    };
    fileReader.onerror = (err) => reject(err);
    fileReader.readAsDataURL(file);
  });
};

/**
 * @description: 压缩图片
 * @param {File} file
 * @param {number} quality 0 - 1
 * @return {Promise<File>}
 */
export default (file: File, quality = 0.5): Promise<File> => {
  return new Promise((resolve, reject) => {
    const dataType = getType(file);
    if (dataType !== "file") return reject(new Error(`Expected parameter type is file, You passed in ${dataType}`));
    if (file.type.indexOf("image") === -1) return resolve(file);
    // 压缩图片
    compressImage(file, quality)
      .then((compressdBlob) => {
        if (!compressdBlob) return resolve(file);

        const fileReader = new FileReader();
        fileReader.onload = () => {
          // 获取图片元信息
          const segments = getSegments(fileReader.result as ArrayBuffer);
          const exif = getEXIF(segments);
          // 没有元数据的时候, 直接抛出压缩后的图片
          if (!exif.length) return resolve(new File([compressdBlob], file.name, { type: file.type, lastModified: Date.now() }));
          // 有元数据的时候, 将元信息合并到压缩图片里
          insertEXIF(compressdBlob, exif)
            // 成功的时候，直接抛出合并后的图片
            .then((newBlob) => resolve(new File([newBlob], file.name, { type: file.type, lastModified: Date.now() })))
            // 失败的时候，直接抛出压缩图片
            .catch(() => resolve(new File([compressdBlob], file.name, { type: file.type, lastModified: Date.now() })));
        };
        fileReader.onerror = () => resolve(file);
        fileReader.readAsArrayBuffer(file);
      })
      .catch(() => resolve(file));
  });
};
