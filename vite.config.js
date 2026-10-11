import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Cloudflare Pages 部署在站点根路径，保持 '/' 即可
  base: '/',
  define: {
    // 构建时间戳，用于页脚自动展示"最后更新"日期
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
