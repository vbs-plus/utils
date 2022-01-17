# VUtils

Team front end tool library

## 本地开发

```sh
npm run serve
```

## 打包成生产（压缩）文件

```sh
npm run build
```

## 单元测试

```sh
npm run test
```

## 安装

```sh
npm i @vbs/utils -S
```

## API

- 校验
  1. isQQ: (data: string | number) => boolean 校验是否是QQ号
  2. isPhone: (data: string | number) => boolean 校验是否是手机号
  3. isCard: (data: string) => boolean 校验是否是身份证号
- 类型
  1. getType: (data: any) => dataType 获取数据类型
- 函数
  1. compressImage: (file: File) => Promise\<File\> 压缩图片
  2. parseUrl: (url: string) => object 获取 URL 的相关对象

## 使用

### 方式一，通过 script 标签引入

```html
<script src="//cdn.jsdelivr.net/npm/@vbs/utils/dist/index.js"></script>
<script>
  console.log(window.VUtils)
  const { isQQ, getType } = window.VUtils;

  console.log(isQQ(2323333339)); // true
  console.log(isQQ(1000)); // false
  
  console.log(getType(true)); // boolean
  console.log(getType(0)); // number
</script>
```

### 方式二，通过模块化引入

```javascript
import { isQQ, getType } from '@vbs/utils';

console.log(isQQ(2323333339)); // true
console.log(isQQ(1000)); // false

console.log(getType(true)); // boolean
console.log(getType(0)); // number
```