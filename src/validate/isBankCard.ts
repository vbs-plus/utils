import getType from "../type/getType";

/**
 * @description: 校验是否是银行卡
 * @param {string | number} data
 * @return {boolean}
 */
export default (data: string | number): boolean => {
  const dataType = getType(data);
  if (dataType !== "string" && dataType !== "number") return false;
  return /^\d{16,19}$/.test(String(data));
};
