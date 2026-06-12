# Trae Session — 官网

Trae Session 产品说明与下载落地页。基于 Vue 3 + Vite + Tailwind CSS，动效组件来自 [Vue Bits](https://vue-bits.dev/)（FloatingLines、CircularGallery、ElectricBorder、GradientText、BorderGlow、SpotlightCard 等）。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物在 `dist/`，可部署到任意静态托管。

## 下载包从哪来？

安装包**不是** fastx 生成的，流程如下：

```
trae-accounts/          ← Electron 客户端源码
  npm run dist:all      ← electron-builder 打包
  release/*.dmg, *.exe  ← 构建产物
       ↓
fastx/public/downloads/ ← npm run sync:downloads 复制过来
       ↓
dist/downloads/         ← npm run build 打进部署目录
       ↓
线上用户点击下载
```

首次或发版时：

```bash
# 1. 在 trae-accounts 构建安装包
cd ../trae-accounts && npm run dist:all

# 2. 同步到网站并构建
cd ../fastx
npm run sync:downloads
npm run build

# 3. 提交安装包（DMG 走 Git LFS）并部署 dist/
git add public/downloads/
git commit -m "chore: update installers"
git push
```

`npm run dev` 会尝试从 `trae-accounts/release/` 同步（本地发版用）；**CI 构建不跑同步**，直接用仓库里已提交的 `public/downloads/`。

Cloudflare Pages 等 CI 若使用 Git LFS，构建命令需加上 LFS 拉取，例如：

```bash
git lfs install && git lfs pull && npm install && npm run build
```
