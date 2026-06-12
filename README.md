# Trae Session — 官网

Trae Session 产品说明与下载落地页。基于 Vue 3 + Vite + Tailwind CSS。

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

## 下载包从哪来？

```
trae-accounts/          ← Electron 客户端源码
  npm run dist:all      ← electron-builder 打包
  release/*.dmg, *.exe
       ↓
GitHub Releases         ← npm run publish:release 上传
       ↓
官网下载按钮            ← 指向 GitHub Releases 直链
```

发版步骤：

```bash
# 1. 构建安装包
cd ../trae-accounts && npm run dist:all

# 2. 发布到 GitHub Releases（需 gh CLI 已登录）
cd ../fastx && npm run publish:release

# 3. 部署网站
npm run build && git push
```

Cloudflare Pages 构建命令：

```bash
npm install && npm run build
```

本地用 `public/downloads/` 测下载时，设置环境变量 `VITE_USE_LOCAL_DOWNLOADS=true` 后执行 `npm run sync:downloads && npm run dev`。
