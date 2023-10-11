import getType from "../type/getType";

/**
 * @description: 深拷贝
 * @param {*}
 * @return {*}
 */
const cloneDeep = <T>(data: T): T => {
  const dataType = getType(data);
  if (dataType !== "array" && dataType !== "object") return data;
  const result: Record<string, any> | T = dataType === "array" ? [] : {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const valueType = getType(value);
      if (valueType !== "array" && valueType !== "object") result[key] = value;
      else result[key] = cloneDeep(<T>value);
    }
  }
  return result as T;
};

export default cloneDeep;
