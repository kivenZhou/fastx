export const APP_VERSION = '0.2.0'

const DOWNLOAD_FILES = {
  win: 'Trae Session-0.2.0-win-x64.exe',
  macArm: 'Trae Session-0.2.0-mac-arm64.dmg',
  macX64: 'Trae Session-0.2.0-mac-x64.dmg',
}

/** 部署前运行 npm run sync:downloads，或改成 GitHub Releases 链接 */
export const DOWNLOADS = {
  win: {
    url: `/downloads/${encodeURIComponent(DOWNLOAD_FILES.win)}`,
    filename: DOWNLOAD_FILES.win,
    labelKey: 'download.win',
    hintKey: 'download.winHint',
    icon: 'windows',
  },
  macArm: {
    url: `/downloads/${encodeURIComponent(DOWNLOAD_FILES.macArm)}`,
    filename: DOWNLOAD_FILES.macArm,
    labelKey: 'download.macArm',
    hintKey: 'download.macArmHint',
    icon: 'apple',
  },
  macX64: {
    url: `/downloads/${encodeURIComponent(DOWNLOAD_FILES.macX64)}`,
    filename: DOWNLOAD_FILES.macX64,
    labelKey: 'download.macX64',
    hintKey: 'download.macX64Hint',
    icon: 'apple',
  },
}
