/**
 * 将 traehop 构建产物复制到 fastx/public/downloads/（仅本地发版时用）。
 * CI 构建直接使用仓库里已提交的 public/downloads/，不依赖 traehop。
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { APP_VERSION, DOWNLOAD_FILES } from '../src/release-meta.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const releaseDir = join(root, '..', 'traehop', 'release')
const downloadsDir = join(root, 'public', 'downloads')

const ARTIFACTS = Object.values(DOWNLOAD_FILES).map((name) => ({ src: name, dest: name }))

mkdirSync(downloadsDir, { recursive: true })

let synced = 0
let existing = 0
const missing = []

for (const { src, dest } of ARTIFACTS) {
  const srcPath = join(releaseDir, src)
  const destPath = join(downloadsDir, dest)

  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath)
    synced++
    console.log(`synced ${dest}`)
    continue
  }

  if (existsSync(destPath)) {
    existing++
    console.log(`using existing ${dest}`)
    continue
  }

  missing.push(dest)
}

if (missing.length) {
  console.error(
    '\n缺少安装包。本地发版请先构建 traehop：\n' +
      '  cd ../traehop && npm run dist:all && cd ../fastx && npm run sync:downloads\n\n' +
      '缺失：\n' +
      missing.map((f) => `  - public/downloads/${f}`).join('\n'),
  )
  process.exit(1)
}

console.log(`\n${synced} synced, ${existing} already in public/downloads/`)
