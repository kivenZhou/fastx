export const APP_VERSION = '0.2.0'

const v = APP_VERSION

/**
 * 安装包托管在 public/downloads/（由 scripts/sync-downloads.mjs 从 trae-accounts/release 复制）
 * 构建后随 dist/ 一起部署；DMG 使用 Git LFS 存储（单文件 >100MB）
 */
export const DOWNLOADS = {
  win: {
    url: `/downloads/Trae-Session-${v}-win-x64.exe`,
    filename: `Trae-Session-${v}-win-x64.exe`,
    labelKey: 'download.win',
    hintKey: 'download.winHint',
    icon: 'windows',
  },
  macArm: {
    url: `/downloads/Trae-Session-${v}-mac-arm64.dmg`,
    filename: `Trae-Session-${v}-mac-arm64.dmg`,
    labelKey: 'download.macArm',
    hintKey: 'download.macArmHint',
    icon: 'apple',
  },
  macX64: {
    url: `/downloads/Trae-Session-${v}-mac-x64.dmg`,
    filename: `Trae-Session-${v}-mac-x64.dmg`,
    labelKey: 'download.macX64',
    hintKey: 'download.macX64Hint',
    icon: 'apple',
  },
}
