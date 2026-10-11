# 马超 · 个人简历站

基于 **Vite + Vue 3 + SCSS** 构建的个人简历与作品集网站。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 发布到 Cloudflare Pages

### 方式一：首次手动上传（推荐先用这个）

1. 登录 Cloudflare Dashboard。
2. 进入 **Workers & Pages → Create application → Pages → Upload assets**。
3. 创建项目，例如 `ma-chao-resume`。
4. 本地执行 `npm run build`。
5. 将构建生成的 `dist` 文件夹上传，不要上传项目根目录。
6. 部署完成后即可通过 `https://项目名.pages.dev` 访问。

当前项目已经配置为部署在站点根路径：

```js
// vite.config.js
base: '/'
```

### 方式二：连接 Git 仓库自动部署

Cloudflare Pages 的 Git 集成通常直接支持 GitHub / GitLab。如果 Cloudflare 页面没有 Gitee 选项，可以将项目同步到 GitHub，再在 Cloudflare 中连接 GitHub 仓库。

构建配置填写：

```text
Framework preset: Vue
Build command: npm run build
Build output directory: dist
Node.js version: 20
```

之后每次推送到连接的 GitHub 分支，Cloudflare Pages 会自动构建并发布。仅仅推送到 Gitee，Cloudflare Pages 通常不会自动监听，因此不需要在当前项目中添加 YAML 文件。

## 内容修改

简历中的经历、项目、技能等数据集中写在 `src/App.vue` 顶部的数组中，修改对应文字即可。页面样式位于 `src/style.scss`。

点击页面中的“打印 / 保存简历”会调用浏览器打印功能，可以选择“另存为 PDF”。
