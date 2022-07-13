/**
 * @description: 获取图片 EXIF 分割后的数据 0xff+标记号(1个字节) + 数据大小描述符(2个字节) + 数据内容(n个字节)
 * @param {rawImage} Blob | ArrayBuffer
 * @param {callback} Function
 */
declare const getSegments: (rawImage: Blob | ArrayBuffer, callback: Function) => any;
export default getSegments;
