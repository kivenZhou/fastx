/**
 * 将 traehop 构建产物发布到 GitHub Releases（供官网下载链接使用）。
 * 需要已安装并登录 gh CLI：brew install gh && gh auth login
 *
 * 用法：npm run publish:release
 */
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { APP_VERSION, DOWNLOAD_FILES, GITHUB_REPO } from '../src/release-meta.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const releaseDir = join(root, '..', 'traehop', 'release')
const stagingDir = join(root, '.release-staging')

const tag = `v${APP_VERSION}`
const assets = []

rmSync(stagingDir, { recursive: true, force: true })
mkdirSync(stagingDir, { recursive: true })

for (const key of Object.keys(DOWNLOAD_FILES)) {
  const filename = DOWNLOAD_FILES[key]
  const src = join(releaseDir, filename)
  const dest = join(stagingDir, filename)
  if (!existsSync(src)) {
    console.error(`缺少 ${src}\n请先在 traehop 执行: npm run dist:all`)
    process.exit(1)
  }
  copyFileSync(src, dest)
  assets.push(dest)
  console.log(`staged ${filename}`)
}

function runGh(args) {
  const result = spawnSync('gh', args, { stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

console.log(`\nPublishing to https://github.com/${GITHUB_REPO}/releases/tag/${tag}\n`)

const createArgs = [
  'release', 'create', tag,
  ...assets,
  '--repo', GITHUB_REPO,
  '--title', `TraeHop ${APP_VERSION}`,
  '--notes', `TraeHop ${APP_VERSION} installers`,
]

const createResult = spawnSync('gh', createArgs, { stdio: 'inherit' })
if (createResult.status !== 0) {
  console.log('\nRelease 可能已存在，尝试上传资源…')
  for (const f of assets) {
    runGh(['release', 'upload', tag, f, '--repo', GITHUB_REPO, '--clobber'])
  }
}

rmSync(stagingDir, { recursive: true, force: true })
console.log('\nDone. Download URLs:')
for (const name of Object.values(DOWNLOAD_FILES)) {
  console.log(`  https://github.com/${GITHUB_REPO}/releases/download/${tag}/${name}`)
}
