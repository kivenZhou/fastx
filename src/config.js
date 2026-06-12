export const APP_VERSION = '0.2.0'

/** 部署时把安装包放到 public/downloads/，或改成 GitHub Releases 链接 */
export const DOWNLOADS = {
  win: {
    url: '/downloads/Trae Session-0.2.0-win-x64.exe',
    labelKey: 'download.win',
    hintKey: 'download.winHint',
    icon: 'windows',
  },
  macArm: {
    url: '/downloads/Trae Session-0.2.0-mac-arm64.dmg',
    labelKey: 'download.macArm',
    hintKey: 'download.macArmHint',
    icon: 'apple',
  },
  macX64: {
    url: '/downloads/Trae Session-0.2.0-mac-x64.dmg',
    labelKey: 'download.macX64',
    hintKey: 'download.macX64Hint',
    icon: 'apple',
  },
}
