# vite-ts-nameof

[![npm](https://img.shields.io/npm/v/vite-ts-nameof.svg)](https://www.npmjs.com/package/vite-ts-nameof)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Give `vite` the ability to resolve `nameof` calls used in TypeScript.

- `vite`: https://github.com/vitejs/vite
- `ts-nameof`: https://github.com/dsherret/ts-nameof

## Usage

1. Install as `devDependencies`

   ```bash
   npm install -D vite-ts-nameof
   # or
   yarn add -D vite-ts-nameof
   ```

2. Inject `vite-ts-nameof` using the `vite.config.ts` module

   ```ts
   import vue from "@vitejs/plugin-vue";
   import { defineConfig } from "vite";
   import tsNameof from "vite-ts-nameof";

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [
       tsNameof(),
       vue(),
     ],
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
