<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationFrame = null
let particles = []
let mouse = { x: 0, y: 0 }
const PARTICLE_COUNT = 150
const COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#2563eb', '#60a5fa']

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.init()
  }

  init() {
    this.baseX = Math.random() * this.canvas.width
    this.baseY = Math.random() * this.canvas.height
    this.x = this.baseX
    this.y = this.baseY
    this.size = Math.random() * 3 + 1.5 // Increased size
    this.type = Math.random() > 0.4 ? 'circle' : 'dash'
    this.angle = Math.random() * Math.PI * 2
    this.speed = Math.random() * 0.4 + 0.1
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.opacity = Math.random() * 0.5 + 0.2 // Increased opacity
    this.rotation = Math.random() * Math.PI * 2
  }

  update() {
    // Harmonic Breathing/Wobble (Fluid movement)
    this.angle += 0.015
    const waveX = Math.sin(this.angle * 0.8) * 3
    const waveY = Math.cos(this.angle * 1.2) * 3
    
    // Mouse interaction with Easing
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Base Target is the home position plus the wave displacement
    let targetX = this.baseX + waveX
    let targetY = this.baseY + waveY

    if (distance < 350) {
      const force = (350 - distance) / 350
      // Shift target slightly towards mouse (limited range, high smoothness)
      targetX += dx * force * 0.15
      targetY += dy * force * 0.15
      
      // Increase wave intensity near mouse for 'excitement'
      targetX += Math.sin(this.angle * 3) * force * 5
      targetY += Math.cos(this.angle * 3) * force * 5
    }

    // Smooth Interpolation (The "Lubrication" feel)
    const easing = 0.04
    this.x += (targetX - this.x) * easing
    this.y += (targetY - this.y) * easing
    
    // Rotation drift
    this.rotation += 0.005
  }

  draw() {
    if (!ctx) return
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color

    if (this.type === 'circle') {
      ctx.beginPath()
      ctx.arc(0, 0, this.size, 0, Math.PI * 2)
      ctx.fill()
    } else {
      // Dashing shapes
      ctx.fillRect(-this.size, -this.size / 2, this.size * 3.5, this.size * 1.5)
    }
    
    ctx.restore()
  }
}

const resize = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  // Re-init particles on resize to avoid clustering
  particles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(canvasRef.value))
  }
}

const animate = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })
  
  animationFrame = requestAnimationFrame(animate)
}

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  resize()
  
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', handleMouseMove)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
canvas {
  opacity: 0.8;
  filter: blur(0.3px);
}
</style>
