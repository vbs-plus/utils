import getType from '../type/getType';

/**
 * @description: 校验是否为身份证
 * @param {string} data
 * @return {*}
 */
export default (data: string): boolean => {
  const dataType = getType(data);
  if (dataType !== 'string') throw new Error(`Expected parameter type is string, You passed in ${dataType}`);
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(String(data));
};