import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

// 插件列表
const plugins = [resolve(), commonjs(), typescript()];

// 生产环境加入代码压缩功能
if (process.env.NODE_ENV === 'production') plugins.push(terser());

export default [
  {
    input: 'src/index.ts',
    output: {
      // 将插件挂载到 window 上: window.VUtils
      name: 'VUtils',
      file: 'dist/index.js',
      format: 'umd',
      exports: 'auto'
    },
    plugins
  },
]