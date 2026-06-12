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

## 下载包

`npm run dev` / `npm run build` 会自动执行 `npm run sync:downloads`，从 `../trae-accounts/release/` 同步安装包到 `public/downloads/`。

若安装包不存在，请先在 `trae-accounts` 目录执行 `npm run dist:all` 构建。

也可修改 `src/config.js` 中的 `DOWNLOADS` 链接为 GitHub Releases 地址。
