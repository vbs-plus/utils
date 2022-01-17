import getType from '../type/getType';

/**
 * @description: 压缩图片
 * @param {File} file
 * @param {number} quality 0 - 1
 * @return {file}
 */
export default (file: File, quality = 1): Promise<File> | Error => {
  return new Promise((resolve, reject) => {
    const dataType = getType(file);
    if (dataType !== 'file') return reject(new Error(`Expected parameter type is file, You passed in ${dataType}`));
    if (file.type.indexOf('image') === -1) return file;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const img = new Image();
      img.src = fileReader.result as string;
      img.onload = () => {
        const { width, height } = img;
        const canvas = window.document.createElement('canvas');
        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(blob => resolve(new window.File([<BlobPart>blob], file.name, { type: file.type })), 'image/webp', quality);
      };
    };
  });
};