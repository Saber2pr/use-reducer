import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './lib/test/test.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: 'test',
    banner: `var process = {
      env: {
        NODE_ENV:''
      }
    }`
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs()]
}