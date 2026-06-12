/**
 * Copy installer artifacts from trae-accounts/release into public/downloads/.
 * Run automatically before dev/build, or manually: npm run sync:downloads
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const releaseDir = join(root, '..', 'trae-accounts', 'release')
const downloadsDir = join(root, 'public', 'downloads')

const FILES = [
  'Trae Session-0.2.0-win-x64.exe',
  'Trae Session-0.2.0-mac-arm64.dmg',
  'Trae Session-0.2.0-mac-x64.dmg',
]

mkdirSync(downloadsDir, { recursive: true })

let copied = 0
let missing = []

for (const name of FILES) {
  const src = join(releaseDir, name)
  const dest = join(downloadsDir, name)
  if (!existsSync(src)) {
    missing.push(name)
    continue
  }
  copyFileSync(src, dest)
  copied++
  console.log(`synced ${name}`)
}

if (missing.length) {
  console.warn(
    '\nMissing release artifacts (build trae-accounts first):\n' +
      missing.map((f) => `  - trae-accounts/release/${f}`).join('\n'),
  )
  process.exit(missing.length === FILES.length ? 1 : 0)
}

console.log(`\n${copied} installer(s) ready in public/downloads/`)
