/**
 * @description: 获取数据类型
 * @param {unknown} data
 * @return {string}
 */
export default (data: unknown): string => {
  const toStingResult = Object.prototype.toString.call(data);
  const type = toStingResult.replace(/^\[object (\w+)\]$/, "$1");
  return type.toLowerCase();
};
