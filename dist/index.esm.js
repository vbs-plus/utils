/**
 * @description: 获取数据类型
 * @param {any} data
 * @return {string}
 */
var getType = (data) => {
    const toStingResult = Object.prototype.toString.call(data);
    const type = toStingResult.replace(/^\[object (\w+)\]$/, "$1");
    return type.toLowerCase();
};

/**
 * @description: 校验是否是 QQ 号码
 * @param {string | number} data
 * @return {boolean}
 */
var isQQ = (data) => {
    const dataType = getType(data);
    if (dataType !== "string" && dataType !== "number")
        return false;
    return /^[1-9][0-9]{4,9}$/.test(String(data));
};

/**
 * @description: 检测是否为手机号
 * @param {string | number} data
 * @return {boolean}
 */
var isPhone = (data) => {
    const dataType = getType(data);
    if (dataType !== "string" && dataType !== "number")
        return false;
    return /^1[3456789]\d{9}$/.test(String(data));
};

/**
 * @description: 校验是否为身份证
 * @param {string} data
 * @return {*}
 */
var isIDCard = (data) => {
    const dataType = getType(data);
    if (dataType !== "string")
        return false;
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data);
};

/**
 * @description: 校验是否为邮箱
 * @param {string} data
 * @return {*}
 */
var isEmail = (data) => {
    const dataType = getType(data);
    if (dataType !== "string")
        return false;
    return /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(data);
};

/**
 * @description: 校验是否是银行卡
 * @param {string | number} data
 * @return {boolean}
 */
var isBankCard = (data) => {
    const dataType = getType(data);
    if (dataType !== "string" && dataType !== "number")
        return false;
    return /^\d{16,19}$/.test(String(data));
};

/**
 * @description: 将 dataURL 转换成 blob 对象
 * @param {*}
 * @return {*}
 */
var dataURLtoBlob = (dataURL) => {
    const dataType = getType(dataURL);
    if (dataType !== "string")
        return null;
    const arr = dataURL.split(",");
    if (!arr[0] || !arr[1])
        return null;
    const code = window.atob(arr[1]);
    const mimeExpRes = arr[0].match(/:(.*?);/);
    if (!mimeExpRes)
        return null;
    let len = code.length;
    const mime = mimeExpRes[1];
    if (!mime)
        return null;
    const ia = new Uint8Array(len);
    while (len--)
        ia[len] = code.charCodeAt(len);
    return new Blob([ia], { type: mime });
};

/**
 * @description: 将 dataURL 转换成 File 对象
 * @param {*}
 * @return {*}
 */
var dataURLtoFile = (dataURL, fileName) => {
    const dataURLType = getType(dataURL);
    const fileNameType = getType(fileName);
    if (dataURLType !== "string" || fileNameType !== "string")
        return null;
    const blob = dataURLtoBlob(dataURL);
    if (!blob)
        return null;
    return new window.File([blob], fileName, { type: blob.type, lastModified: +new Date() });
};

/**
 * @description: 压缩图片
 * @param {File} file
 * @param {number} quality 0 - 1
 * @return {file}
 */
var compressImage = (file, quality = 1) => {
    return new Promise((resolve, reject) => {
        const dataType = getType(file);
        if (dataType !== "file")
            return reject(new Error(`Expected parameter type is file, You passed in ${dataType}`));
        if (file.type.indexOf("image") === -1)
            return resolve(file);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const img = new Image();
            img.src = fileReader.result;
            img.onload = () => {
                const { width, height } = img;
                const canvas = window.document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                const dataURL = canvas.toDataURL(file.type, quality);
                const fileData = dataURLtoFile(dataURL, file.name);
                if (!fileData)
                    return reject(new Error("compress error"));
                resolve(fileData);
            };
            img.onerror = (err) => reject(err);
        };
        fileReader.onerror = (err) => reject(err);
        fileReader.readAsDataURL(file);
    });
};

var parseUrl = (url) => {
    getType(url);
    const result = {};
    const keys = ["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"];
    const regexp = /(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
    const match = regexp.exec(url);
    if (!match)
        return null;
    keys.forEach((item, index) => (result[item] = match[index] || ""));
    return result;
};

const cloneDeep = (data) => {
    const dataType = getType(data);
    if (dataType !== "array" && dataType !== "object")
        return data;
    const result = dataType === "array" ? [] : {};
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            const valueType = getType(value);
            if (valueType !== "array" && valueType !== "object")
                result[key] = value;
            else
                result[key] = cloneDeep(value);
        }
    }
    return result;
};

export { cloneDeep, compressImage, dataURLtoBlob, dataURLtoFile, getType, isBankCard, isEmail, isIDCard, isPhone, isQQ, parseUrl };
