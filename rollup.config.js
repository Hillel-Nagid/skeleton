import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import css from "rollup-plugin-import-css";

import packageJson from './package.json' assert { type: 'json' };

const name = packageJson.main.replace(/\.js$/, '');
const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild(),css()],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [css(),dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
]
