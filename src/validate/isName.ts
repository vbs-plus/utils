import getType from "../type/getType";

/**
 * @description: 检测是否为中文姓名
 * @param {string} data
 * @return {boolean}
 */
export default (data: string): boolean => {
  const dataType = getType(data);
  if (dataType !== "string") return false;
  return /^(?:[\u4e00-\u9fa5·]{2,16})$/.test(data);
};
