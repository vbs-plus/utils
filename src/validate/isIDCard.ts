import getType from "../type/getType";

/**
 * @description: 校验是否为身份证
 * @param {string} data
 * @return {*}
 */
export default (data: string): boolean => {
  const dataType = getType(data);
  if (dataType !== "string") return false;
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data);
};
