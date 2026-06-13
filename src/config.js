import { APP_VERSION, DOWNLOAD_FILES, releaseUrl } from './release-meta.js'

export {
  APP_VERSION,
  DOWNLOAD_FILES,
  GITHUB_REPO,
  OFFICIAL_SITE,
  RELEASE_REPO,
  SITE_REPO,
  SOURCE_REPO,
  githubRepoUrl,
  githubReleasesUrl,
  officialSiteUrl,
} from './release-meta.js'

function downloadUrl(filename) {
  const env = import.meta.env
  if (env?.DEV && env.VITE_USE_LOCAL_DOWNLOADS === 'true') {
    return `/downloads/${filename}`
  }
  return releaseUrl(filename)
}

/** GitHub Releases 托管（Cloudflare Pages 单文件上限 25MB） */
export const DOWNLOADS = {
  win: {
    url: downloadUrl(DOWNLOAD_FILES.win),
    filename: DOWNLOAD_FILES.win,
    external: true,
    labelKey: 'download.win',
    hintKey: 'download.winHint',
    icon: 'windows',
  },
  macArm: {
    url: downloadUrl(DOWNLOAD_FILES.macArm),
    filename: DOWNLOAD_FILES.macArm,
    external: true,
    labelKey: 'download.macArm',
    hintKey: 'download.macArmHint',
    icon: 'apple',
  },
  macX64: {
    url: downloadUrl(DOWNLOAD_FILES.macX64),
    filename: DOWNLOAD_FILES.macX64,
    external: true,
    labelKey: 'download.macX64',
    hintKey: 'download.macX64Hint',
    icon: 'apple',
  },
}
