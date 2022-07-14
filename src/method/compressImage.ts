import getType from "../type/getType";
import dataURLtoFile from "./dataURLtoFile";

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
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const { width, height } = img;
        const canvas = window.document.createElement("canvas");
        const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataURL = canvas.toDataURL("image/jpeg", quality);
        const newFile = dataURLtoFile(dataURL, file.name);
        resolve(newFile || file);
      };
      img.src = fileReader.result as string;
    };
    fileReader.onerror = () => resolve(file);
    fileReader.readAsDataURL(file);
  });
};
