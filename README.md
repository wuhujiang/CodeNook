# 马超 · 个人简历站

基于 **Vite + Vue 3 + SCSS** 构建的个人简历网站。简历内容请直接在网站中查看，本文档仅说明项目的运行与部署方式。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建与本地预览：

```bash
pnpm build
pnpm preview
```

## Vercel 部署

本项目已连接 GitHub 时，无需额外编写部署脚本或 YAML。Vercel 构建配置如下：

- Framework Preset：`Vite`
- Build Command：`npm run build`
- Output Directory：`dist`
- Root Directory：项目根目录

将变更推送到 Vercel 连接的 GitHub 仓库后，Vercel 会自动构建和部署。常用提交命令：

```bash
git add .
git commit -m "更新简历网站"
git push
```

## 修改内容

页面内容位于 `src/App.vue`，样式位于 `src/style.scss`。网站中的“打印 / 保存简历”按钮可调用浏览器打印功能并另存为 PDF。

页脚显示的“最后更新”日期由 `vite.config.js` 在构建时自动注入（`__BUILD_TIME__`），无需手动维护，每次 `pnpm build` 会自动刷新。该日期仅在网页中展示，打印 / 导出的 PDF 不包含。
