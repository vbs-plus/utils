import getType from '../type/getType';

/**
 * @description: 将 dataURL 转换成 blob 对象
 * @param {*}
 * @return {*}
 */
export default (dataURL: string): Blob | null => {
  const dataType = getType(dataURL);
  if (dataType !== 'string') return null;
  const arr = dataURL.split(',');
  if (!arr[0] || !arr[1]) return null;
  const code = window.atob(arr[1]);
  const mimeExpRes = arr[0].match(/:(.*?);/);
  if (!mimeExpRes) return null;
  let len = code.length;
  const mime = mimeExpRes[1];
  if (!mime) return null;
  const ia = new Uint8Array(len);
  while (len--) ia[len] = code.charCodeAt(len);
  return new Blob([ia], { type: mime });
};