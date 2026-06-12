const GALLERY_META = {
  switch: { from: '#6366f1', to: '#818cf8' },
  local: { from: '#7c3aed', to: '#a78bfa' },
  login: { from: '#0284c7', to: '#38bdf8' },
  usage: { from: '#9333ea', to: '#c084fc' },
  backup: { from: '#4f46e5', to: '#818cf8' },
  tray: { from: '#7e22ce', to: '#c084fc' },
}

export function createGalleryImage(emoji, from, to) {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  grad.addColorStop(0, from)
  grad.addColorStop(1, to)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.font = '140px "Apple Color Emoji", "Segoe UI Emoji", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(emoji, canvas.width / 2, canvas.height / 2)

  return canvas.toDataURL('image/png')
}

export function buildGalleryItems(featureKeys, getIcon, getTitle) {
  return featureKeys.map((key) => {
    const meta = GALLERY_META[key] ?? { from: '#6366f1', to: '#818cf8' }
    return {
      image: createGalleryImage(getIcon(key), meta.from, meta.to),
      text: getTitle(key),
    }
  })
}
