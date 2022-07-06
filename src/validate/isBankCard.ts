import getType from "../type/getType";

/**
 * @description: 校验是否是银行卡
 * @param {string | number} data
 * @return {boolean}
 */
export default (data: string | number): boolean => {
  const dataType = getType(data);
  if (dataType !== "string" && dataType !== "number") return false;
  return /^[1-9]\d{9,29}$/.test(String(data));
};
