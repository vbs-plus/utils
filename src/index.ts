import getType from './type/getType';

import isQQ from './validate/isQQ';
import isPhone from './validate/isPhone';
import isCard from './validate/isCard';
import isEmail from './validate/isEmail';

import compressImage from './method/compressImage';
import parseUrl from './method/parseUrl';
import dataURLtoBlob from './method/dataURLtoBlob';
import dataURLtoFile from './method/dataURLtoFile';

export {
  getType,
  isQQ,
  parseUrl,
  compressImage,
  isPhone,
  isCard,
  isEmail,
  dataURLtoBlob,
  dataURLtoFile,
};