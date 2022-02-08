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
  console.log(window.VUtils)
  const { isQQ, getType } = window.VUtils;

  console.log(isQQ(2323333339)); // true
  console.log(isQQ(1000)); // false
  
  console.log(getType(true)); // boolean
  console.log(getType(0)); // number
</script>
```

### Mode 2

```javascript
import { isQQ, getType } from '@vbs/utils';

console.log(isQQ(2323333339)); // true
console.log(isQQ(1000)); // false

console.log(getType(true)); // boolean
console.log(getType(0)); // number
```


## API

- 校验
  1. isQQ: (data: string | number) => boolean 校验是否是QQ号
  2. isPhone: (data: string | number) => boolean 校验是否是手机号
  3. isCard: (data: string) => boolean 校验是否是身份证号
  4. isEmail: (data: string) => boolean 校验是否是邮箱
- 类型
  1. getType: (data: any) => dataType 获取数据类型
- 函数
  1. compressImage: (file: File) => Promise\<File\> 压缩图片
  2. parseUrl: (url: string) => object 获取 URL 的相关对象
