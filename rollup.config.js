import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

// 插件列表
const plugins = [typescript()];

// 生产环境加入代码压缩功能
if (process.env.NODE_ENV === "production") plugins.push(terser());

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "VUtils", // window.VUtils
      },
      {
        file: "dist/index.esm.js", // package.json 中 "module": "dist/index.es.js"
        format: "esm", // es module 形式的包， 用来import 导入，可以 tree shaking
      },
    ],
    plugins,
  },
];
