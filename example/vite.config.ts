import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsNameof from 'vite-ts-nameof'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsNameof(), vue()]
})
