import getType from "./type/getType";

import isQQ from "./validate/isQQ";
import isPhone from "./validate/isPhone";
import isIDCard from "./validate/isIDCard";
import isEmail from "./validate/isEmail";
import isBankCard from "./validate/isBankCard";

import compressImage from "./method/compressImage";
import parseUrl from "./method/parseUrl";
import dataURLtoBlob from "./method/dataURLtoBlob";
import dataURLtoFile from "./method/dataURLtoFile";

export { getType, isQQ, parseUrl, compressImage, isPhone, isIDCard, isEmail, isBankCard, dataURLtoBlob, dataURLtoFile };
