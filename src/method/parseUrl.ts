import getType from "../type/getType";

/**
 * @description: 解析 URL 地址的参数
 * @param {string} url
 * @return {object | null}
 */
interface T {
  [property: string]: string;
}
export default (url: string): null | T => {
  const dataType = getType(url);
  if (dataType !== "string") null;
  const result: T = {};
  const keys = ["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"];
  const regexp = /(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
  const match = regexp.exec(url);
  if (!match) return null;
  keys.forEach((item, index) => (result[item] = match[index] || ""));
  return result;
};
