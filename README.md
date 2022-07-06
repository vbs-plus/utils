# VUtils

Team front end tool library

[![npm version](https://badge.fury.io/js/@vbs%2Futils.svg)](https://badge.fury.io/js/@vbs%2Futils)
[![GitHub issues](https://img.shields.io/github/issues/vbs-plus/utils)](https://github.com/vbs-plus/utils/issues)
[![GitHub forks](https://img.shields.io/github/forks/vbs-plus/utils)](https://github.com/vbs-plus/utils/network)
[![GitHub stars](https://img.shields.io/github/stars/vbs-plus/utils)](https://github.com/vbs-plus/utils/stargazers)
[![GitHub license](https://img.shields.io/github/license/vbs-plus/utils)](https://github.com/vbs-plus/utils/blob/main/LICENSE)

## Install

```sh
npm i @vbs/utils -S
```

## Use

### Mode 1

```html
<script src="//cdn.jsdelivr.net/npm/@vbs/utils/dist/index.umd.js"></script>
<script>
  console.log(window.VUtils);
  const { isQQ, getType } = window.VUtils;

  console.log(isQQ(2323333339)); // true
  console.log(isQQ(1000)); // false

  console.log(getType(true)); // boolean
  console.log(getType(0)); // number
</script>
```

### Mode 2

```html
<script type="module">
  import { isQQ, getType } = '../dist/index.esm.js';

  console.log(isQQ(2323333339)); // true
  console.log(isQQ(1000)); // false

  console.log(getType(true)); // boolean
  console.log(getType(0)); // number
</script>
```

### Mode 3

```javascript
import { isQQ, getType } from "@vbs/utils";

console.log(isQQ(2323333339)); // true
console.log(isQQ(1000)); // false

console.log(getType(true)); // boolean
console.log(getType(0)); // number
```

## API

- 校验
  1. isQQ: (data: string | number) => boolean 校验是否是 QQ 号
  2. isPhone: (data: string | number) => boolean 校验是否是手机号
  3. isIDCard: (data: string) => boolean 校验是否是身份证号
  4. isEmail: (data: string) => boolean 校验是否是邮箱
  5. isBankCard: (data: string|number) => boolean 校验是否是银行卡
  6. isName: (data: string) => boolean 校验是否是中国人姓名
- 类型
  1. getType: (data: unknown) => string 获取数据类型
- 方法
  1. compressImage: (file: File, quality = 1) => Promise\<File\> | Error 压缩图片
  2. parseUrl: (url: string) => object | null 获取 URL 的相关对象
  3. dataURLtoBlob: (dataURL: string) => Blob | null 将 Base64 字符串转为 Blob 对象
  4. dataURLtoFile: (dataURL: string, fileName: string) => File | null 将 Base64 字符串转为 File 对象
- 函数
  1. cloneDeep: (data: Array<unknown> | Record<string | number, unknown>) => Array<unknown> | Record<string | number, unknown>
