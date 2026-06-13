/**
 * 转发到 traehop 仓库发布（安装包在 traehop/release/ 构建）。
 * 推荐直接在 traehop 目录执行：npm run dist:all && npm run publish:release
 */
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const script = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'traehop', 'scripts', 'publish-release.mjs')
const result = spawnSync('node', [script], { stdio: 'inherit' })
process.exit(result.status ?? 1)
