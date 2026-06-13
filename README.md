# TraeHop — 官网

TraeHop 产品说明与下载落地页。基于 Vue 3 + Vite + Tailwind CSS。

## 开发

```bash
npm install
npm run dev
```

## 构建与部署

```bash
npm install
npm run build
```

产物在 `dist/`，部署到 Cloudflare Pages。**安装包不要放进 dist**（Pages 单文件上限 25MB）。

## 下载包发布

客户端在 `../traehop`，构建安装包：

```bash
cd ../traehop && npm run dist:all
```

安装包通过 GitHub Releases 分发，官网下载按钮指向 Releases 直链。

```bash
# 发布到 GitHub Releases（需 gh CLI 已登录，安装包需已准备好）
npm run publish:release

# 部署网站
npm run build && git push
```

Cloudflare Pages 构建命令：

```bash
npm install && npm run build
```

本地用 `public/downloads/` 测下载时，设置环境变量 `VITE_USE_LOCAL_DOWNLOADS=true` 后执行 `npm run sync:downloads && npm run dev`。
