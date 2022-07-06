import getType from "../type/getType";

/**
 * @description: 检测是否为姓名
 * @param {string} data
 * @param {string} type CN | EN
 * @return {boolean}
 */
export default (data: string, type: "CN" | "EN" = "CN"): boolean => {
  const dataType = getType(data);
  if (dataType !== "string") return false;
  if (type === "EN") return /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(data);
  return /^(?:[\u4e00-\u9fa5·]{2,16})$/.test(data);
};
