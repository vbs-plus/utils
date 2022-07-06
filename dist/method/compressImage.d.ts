/**
 * @description: 压缩图片
 * @param {File} file
 * @param {number} quality 0 - 1
 * @return {file}
 */
declare const _default: (file: File, quality?: number) => Promise<File> | Error;
export default _default;
