import dts from 'rollup-plugin-dts'
// import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const config = [
  //  >> create ts definitions in "dist" folder
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  //  >> create ts definitions in "blog" folder
  {
    input: './src/blog/index.ts',
    output: [{ file: 'dist/blog/blog.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  //  >> create ts definitions in "website" folder
  {
    input: './src/website/index.ts',
    output: [{ file: 'dist/website/website.d.ts', format: 'es' }],
    plugins: [dts()],
  },

  //  >> create ES6 bundle
  {
    input: {
      'react-bricks-ui.esm': './src/index.ts',
      'blog/react-bricks-ui-blog.esm': './src/blog/index.ts',
      'website/react-bricks-ui-website.esm': './src/website/index.ts',
    },
    plugins: [typescript(), terser({ format: { comments: false } })],
    output: [
      {
        dir: './dist',
        format: 'esm',
        sourcemap: true,
        chunkFileNames: 'react-bricks-ui-[hash].esm.js',
      },
    ],
  },

  //  >> create CommonJs bundle
  {
    input: {
      index: './src/index.ts',
      'blog/index': './src/blog/index.ts',
      'website/index': './src/website/index.ts',
    },
    plugins: [typescript(), terser({ format: { comments: false } })],
    output: [
      {
        dir: './dist',
        format: 'cjs',
        sourcemap: true,
        chunkFileNames: 'react-bricks-ui-[hash].js',
      },
    ],
  },
]

export default config
