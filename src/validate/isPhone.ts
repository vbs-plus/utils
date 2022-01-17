import getType from '../type/getType';

/**
 * @description: 检测是否为手机号
 * @param {string | number} data
 * @return {boolean}
 */
export default (data: string | number): boolean => {
  const dataType = getType(data);
  if (dataType !== 'string' && dataType !== 'number') return false;
  return /^1[3456789]\d{9}$/.test(String(data));
};