import getType from "../type/getType";

/**
 * @description: 校验是否是 QQ 号码
 * @param {string | number} data
 * @return {boolean}
 */
export default (data: string | number): boolean => {
  const dataType = getType(data);
  if (dataType !== "string" && dataType !== "number") return false;
  return /^[1-9][0-9]{4,9}$/.test(String(data));
};
