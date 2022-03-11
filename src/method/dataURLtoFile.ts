import getType from "../type/getType";
import dataURLtoBlob from "./dataURLtoBlob";

/**
 * @description: 将 dataURL 转换成 File 对象
 * @param {*}
 * @return {*}
 */
export default (dataURL: string, fileName: string): File | null => {
  const dataURLType = getType(dataURL);
  const fileNameType = getType(fileName);
  if (dataURLType !== "string" || fileNameType !== "string") return null;
  const blob = dataURLtoBlob(dataURL);
  if (!blob) return null;
  return new window.File([blob], fileName, { type: blob.type, lastModified: +new Date() });
};
