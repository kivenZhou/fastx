# TraeHop 官网

TraeHop 产品落地页，线上地址：**https://www.fastx.ink**

| 仓库 | 职责 |
|------|------|
| **[kivenZhou/traehop](https://github.com/kivenZhou/traehop)** | 桌面客户端源码 + GitHub Releases 安装包（**Star 请点这里**） |
| **kivenZhou/fastx**（本仓库） | 官网源码，部署到 Cloudflare Pages |

基于 Vue 3 + Vite + Tailwind CSS，MIT 开源。

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

Cloudflare Pages 构建命令：

```bash
npm install && npm run build
```

## 安装包发布（在 traehop 仓库操作）

安装包由 **traehop** 构建并发布到其 GitHub Releases，官网下载按钮自动指向对应直链。

```bash
cd ../traehop
npm run dist:all
npm run publish:release   # 需要 gh CLI 已登录
```

在 fastx 目录也可转发执行：

```bash
npm run publish:release
```

本地测下载时，设置 `VITE_USE_LOCAL_DOWNLOADS=true` 后执行 `npm run sync:downloads && npm run dev`。
