import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'iife',
      file: 'public/dist/bundle/verbasizer.js',
      name: 'Verbasizer',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      module: 'esnext',
      declarationMap: false,
      declarationDir: undefined,
    }),
    sourcemaps(),
  ],
};
