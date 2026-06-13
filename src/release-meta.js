/** 发版元数据（Node 脚本与 Vite 共用，勿使用 import.meta.env） */
export const APP_VERSION = '0.3.0'

/** 官网域名（Cloudflare Pages 部署） */
export const OFFICIAL_SITE = 'https://www.fastx.ink'

/** TraeHop 产品仓库（客户端源码 + GitHub Releases 安装包） */
export const RELEASE_REPO = 'kivenZhou/traehop'

/** 官网源码仓库（仅落地页，不含安装包） */
export const SITE_REPO = 'kivenZhou/fastx'

/** @deprecated 使用 RELEASE_REPO */
export const SOURCE_REPO = RELEASE_REPO

/** @deprecated 使用 SITE_REPO */
export const GITHUB_REPO = SITE_REPO

export const DOWNLOAD_FILES = {
  win: `TraeHop-${APP_VERSION}-win-x64.exe`,
  macArm: `TraeHop-${APP_VERSION}-mac-arm64.dmg`,
  macX64: `TraeHop-${APP_VERSION}-mac-x64.dmg`,
}

export function officialSiteUrl(path = '/') {
  return `${OFFICIAL_SITE}${path}`
}

export function githubRepoUrl(repo = RELEASE_REPO) {
  return `https://github.com/${repo}`
}

export function githubReleasesUrl() {
  return `https://github.com/${RELEASE_REPO}/releases/tag/v${APP_VERSION}`
}

export function releaseUrl(filename) {
  return `https://github.com/${RELEASE_REPO}/releases/download/v${APP_VERSION}/${filename}`
}
