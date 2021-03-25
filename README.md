<h1 align="center">vite-plugin-ts-nameof</h1>

<p align="center">
  <a href="https://github.com/Shinigami92/vite-plugin-ts-nameof/blob/main/LICENSE">
    <img alt="license: MIT" src="https://img.shields.io/github/license/Shinigami92/vite-plugin-ts-nameof.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-ts-nameof" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/vite-plugin-ts-nameof.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-ts-nameof" target="_blank">
    <img alt="downloads" src="https://img.shields.io/npm/dt/vite-plugin-ts-nameof.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="Code style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://github.com/vitejs/awesome-vite#transformers" target="_blank">
    <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome">
  </a>
  <a href="https://github.com/Shinigami92/vite-plugin-ts-nameof/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/Shinigami92/vite-plugin-ts-nameof/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
</p>

<p align="center">
  Give <a href="https://github.com/vitejs/vite" target="_blank">Vite</a> the ability to resolve <a href="https://github.com/dsherret/ts-nameof" target="_blank">nameof</a> calls in TypeScript.
</p>

## Usage

1. Install as `devDependencies`

   ```bash
   npm install --save-dev vite-plugin-ts-nameof
   # or
   yarn add --dev vite-plugin-ts-nameof
   ```

2. Inject `vite-plugin-ts-nameof` using the `vite.config.ts` module

   ```ts
   import vue from '@vitejs/plugin-vue';
   import { defineConfig } from 'vite';
   import tsNameof from 'vite-plugin-ts-nameof';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [tsNameof(), vue()],
   });
   ```

3. Add `ts-nameof.d.ts` to your `tsconfig.json`

   ```jsonc
   {
     // "compilerOptions"
     // "include"
     // ...
     "files": ["./node_modules/ts-nameof/ts-nameof.d.ts"]
   }
   ```

## More Awesome Vite Plugins

Can be found here: [Awesome Vite.js](https://github.com/vitejs/awesome-vite#readme)
