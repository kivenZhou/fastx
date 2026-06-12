/** 发版元数据（Node 脚本与 Vite 共用，勿使用 import.meta.env） */
export const APP_VERSION = '0.2.0'
export const GITHUB_REPO = 'kivenZhou/fastx'

export const DOWNLOAD_FILES = {
  win: `Trae-Session-${APP_VERSION}-win-x64.exe`,
  macArm: `Trae-Session-${APP_VERSION}-mac-arm64.dmg`,
  macX64: `Trae-Session-${APP_VERSION}-mac-x64.dmg`,
}

export function releaseUrl(filename) {
  return `https://github.com/${GITHUB_REPO}/releases/download/v${APP_VERSION}/${filename}`
}
