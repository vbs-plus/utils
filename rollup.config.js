import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

// 插件列表
const plugins = [resolve(), commonjs(), typescript()];

// 生产环境加入代码压缩功能
if (process.env.NODE_ENV === 'production') plugins.push(terser());

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js', // package.json 中 "module": "dist/index.esm.js"
        format: 'esm', // es module 形式的包， 用来import 导入，可以 tree shaking
      },
      {
        // 将插件挂载到 window 上: window.VUtils
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'VUtils',
      },
    ],
    plugins
  },
]