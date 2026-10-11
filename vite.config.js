import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Cloudflare Pages 部署在站点根路径，保持 '/' 即可
  base: '/',
})
