/**
 * @description: 深拷贝
 * @param {*}
 * @return {*}
 */
type T = Array<unknown> | Record<string | number, unknown>;
declare const cloneDeep: (data: T) => T;
export default cloneDeep;
