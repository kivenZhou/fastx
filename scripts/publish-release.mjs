/**
 * 将 traehop 构建产物发布到 GitHub Releases（供官网下载链接使用）。
 * 需要已安装并登录 gh CLI：brew install gh && gh auth login
 *
 * 用法：npm run publish:release
 */
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import { APP_VERSION, DOWNLOAD_FILES, GITHUB_REPO } from '../src/release-meta.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const releaseDir = join(root, '..', 'traehop', 'release')
const stagingDir = join(root, '.release-staging')

const SRC_NAMES = {
  win: `TraeHop-${APP_VERSION}-win-x64.exe`,
  macArm: `TraeHop-${APP_VERSION}-mac-arm64.dmg`,
  macX64: `TraeHop-${APP_VERSION}-mac-x64.dmg`,
}

const tag = `v${APP_VERSION}`
const assets = []

rmSync(stagingDir, { recursive: true, force: true })
mkdirSync(stagingDir, { recursive: true })

for (const key of Object.keys(DOWNLOAD_FILES)) {
  const src = join(releaseDir, SRC_NAMES[key])
  const dest = join(stagingDir, DOWNLOAD_FILES[key])
  if (!existsSync(src)) {
    console.error(`缺少 ${src}\n请先在 traehop 执行: npm run dist:all`)
    process.exit(1)
  }
  copyFileSync(src, dest)
  assets.push(dest)
  console.log(`staged ${DOWNLOAD_FILES[key]}`)
}

const assetArgs = assets.flatMap((f) => ['--attach', f])
const cmd = [
  'gh', 'release', 'create', tag,
  '--repo', GITHUB_REPO,
  '--title', `TraeHop ${APP_VERSION}`,
  '--notes', `TraeHop ${APP_VERSION} installers`,
  ...assetArgs,
].join(' ')

console.log(`\nPublishing to https://github.com/${GITHUB_REPO}/releases/tag/${tag}\n`)
try {
  execSync(cmd, { stdio: 'inherit' })
} catch {
  // release 可能已存在，尝试 upload
  console.log('\nRelease 可能已存在，尝试上传资源…')
  for (const f of assets) {
    execSync(`gh release upload ${tag} "${f}" --repo ${GITHUB_REPO} --clobber`, { stdio: 'inherit' })
  }
}

rmSync(stagingDir, { recursive: true, force: true })
console.log('\nDone. Download URLs:')
for (const name of Object.values(DOWNLOAD_FILES)) {
  console.log(`  https://github.com/${GITHUB_REPO}/releases/download/${tag}/${name}`)
}
