import getType from '../type/getType';

/**
 * @description: 校验是否为邮箱
 * @param {string} data
 * @return {*}
 */
export default (data: string): boolean => {
  const dataType = getType(data);
  if (dataType !== 'string') return false;
  return /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(data);
};
