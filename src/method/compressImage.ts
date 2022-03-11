import getType from "../type/getType";
import dataURLtoFile from "./dataURLtoFile";

/**
 * @description: 压缩图片
 * @param {File} file
 * @param {number} quality 0 - 1
 * @return {file}
 */
export default (file: File, quality = 1): Promise<File> | Error => {
  return new Promise((resolve, reject) => {
    const dataType = getType(file);
    if (dataType !== "file") return reject(new Error(`Expected parameter type is file, You passed in ${dataType}`));
    if (file.type.indexOf("image") === -1) return resolve(file);
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
        const dataURL = canvas.toDataURL(file.type, quality);
        const fileData = dataURLtoFile(dataURL, file.name);
        if (!fileData) return reject(new Error("compress error"));
        resolve(fileData);
      };
      img.onerror = (err) => reject(err);
    };
    fileReader.onerror = (err) => reject(err);
    fileReader.readAsDataURL(file);
  });
};
