import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

build({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  external: [],
  format: 'cjs',
  outfile: './dist/index.js',
  platform: 'node',
  plugins: [],
})
