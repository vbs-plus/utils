import getType from "../type/getType";

/**
 * @description: 深拷贝
 * @param {*}
 * @return {*}
 */
type T = Array<unknown> | Record<string | number, unknown>;
const cloneDeep = (data: T): T => {
  const dataType = getType(data);
  if (dataType !== "array" && dataType !== "object") return data;
  const result: T = dataType === "array" ? [] : {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const valueType = getType(value);
      if (valueType !== "array" && valueType !== "object") result[key] = value;
      else result[key] = cloneDeep(<T>value);
    }
  }
  return result;
};
export default cloneDeep;
