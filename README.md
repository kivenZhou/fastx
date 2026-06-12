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

将 `trae-accounts/release/` 中的安装包复制到 `public/downloads/`：

- `Trae Session-0.2.0-win-x64.exe`
- `Trae Session-0.2.0-mac-arm64.dmg`
- `Trae Session-0.2.0-mac-x64.dmg`

或修改 `src/config.js` 中的 `DOWNLOADS` 链接为 GitHub Releases 地址。
