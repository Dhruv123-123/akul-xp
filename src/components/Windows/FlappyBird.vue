<template>
  <!-- AKUL: Flappy Bird easter egg window -->
  <div class="relative right-0 h-content-window overflow-hidden bg-white flex flex-col items-center justify-center">
    <canvas
      ref="canvasRef"
      width="320"
      height="480"
      style="display:block; cursor:pointer;"
      @click="flap"
      @mouseenter="enableKeys"
      @mouseleave="disableKeys"
    ></canvas>
    <p class="text-center font-trebuchet-pixel text-xxs text-gray-500 mt-1">
      Click or press Space to flap
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let raf = null

// Config
const W = 320, H = 480
const GRAVITY = 0.35, FLAP_VEL = -7, PIPE_SPEED = 2.2
const PIPE_W = 52, GAP = 130, PIPE_INTERVAL = 90

// State
let bird = { x: 80, y: H / 2, vy: 0, r: 14 }
let pipes = []
let frame = 0
let score = 0
let best = 0
let state = 'idle' // 'idle' | 'playing' | 'dead'

function reset() {
  bird = { x: 80, y: H / 2, vy: 0, r: 14 }
  pipes = []
  frame = 0
  score = 0
  state = 'idle'
}

function flap() {
  if (state === 'idle') { state = 'playing' }
  if (state === 'dead') { reset(); state = 'playing'; return }
  bird.vy = FLAP_VEL
}

function drawBird() {
  // Body
  ctx.fillStyle = '#ffe600'
  ctx.beginPath()
  ctx.arc(bird.x, bird.y, bird.r, 0, Math.PI * 2)
  ctx.fill()
  // Eye
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.arc(bird.x + 6, bird.y - 4, 5, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#222'
  ctx.beginPath()
  ctx.arc(bird.x + 7, bird.y - 4, 2.5, 0, Math.PI * 2)
  ctx.fill()
  // Beak
  ctx.fillStyle = '#f97316'
  ctx.beginPath()
  ctx.moveTo(bird.x + bird.r, bird.y)
  ctx.lineTo(bird.x + bird.r + 10, bird.y - 3)
  ctx.lineTo(bird.x + bird.r + 10, bird.y + 3)
  ctx.closePath()
  ctx.fill()
  // Wing
  const wingY = state === 'playing' ? bird.y + 4 + Math.sin(frame * 0.3) * 4 : bird.y + 4
  ctx.fillStyle = '#facc15'
  ctx.beginPath()
  ctx.ellipse(bird.x - 2, wingY, 10, 6, -0.3, 0, Math.PI * 2)
  ctx.fill()
}

function drawPipe(p) {
  // Top pipe
  ctx.fillStyle = '#74c442'
  ctx.fillRect(p.x, 0, PIPE_W, p.top - 16)
  ctx.fillStyle = '#5aad2e'
  ctx.fillRect(p.x - 4, p.top - 16, PIPE_W + 8, 16)
  // Bottom pipe
  ctx.fillStyle = '#74c442'
  ctx.fillRect(p.x, p.top + GAP + 16, PIPE_W, H - p.top - GAP - 16)
  ctx.fillStyle = '#5aad2e'
  ctx.fillRect(p.x - 4, p.top + GAP, PIPE_W + 8, 16)
}

function drawGround() {
  ctx.fillStyle = '#ded895'
  ctx.fillRect(0, H - 20, W, 20)
  ctx.fillStyle = '#c8b863'
  ctx.fillRect(0, H - 20, W, 4)
}

function drawUI() {
  if (state === 'idle') {
    ctx.fillStyle = 'rgba(0,0,0,0.35)'
    ctx.fillRect(60, H / 2 - 60, W - 120, 100)
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 22px Tahoma'
    ctx.textAlign = 'center'
    ctx.fillText('FLAPPY BIRD', W / 2, H / 2 - 25)
    ctx.font = '13px Tahoma'
    ctx.fillText('Click or Space to start', W / 2, H / 2 + 5)
    if (best > 0) {
      ctx.font = '12px Tahoma'
      ctx.fillText('Best: ' + best, W / 2, H / 2 + 28)
    }
  }
  if (state === 'playing' || state === 'dead') {
    ctx.fillStyle = state === 'dead' ? '#ff4444' : '#fff'
    ctx.font = 'bold 32px Tahoma'
    ctx.textAlign = 'center'
    ctx.shadowColor = 'rgba(0,0,0,0.5)'
    ctx.shadowBlur = 4
    ctx.fillText(score, W / 2, 60)
    ctx.shadowBlur = 0
  }
  if (state === 'dead') {
    ctx.fillStyle = 'rgba(0,0,0,0.4)'
    ctx.fillRect(50, H / 2 - 70, W - 100, 120)
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 20px Tahoma'
    ctx.textAlign = 'center'
    ctx.fillText('GAME OVER', W / 2, H / 2 - 35)
    ctx.font = '13px Tahoma'
    ctx.fillText('Score: ' + score + '   Best: ' + best, W / 2, H / 2 - 8)
    ctx.fillText('Click or Space to retry', W / 2, H / 2 + 18)
  }
}

function hits(p) {
  if (bird.y + bird.r >= H - 20 || bird.y - bird.r <= 0) return true
  if (p.x !== undefined) {
    if (bird.x + bird.r > p.x - 4 && bird.x - bird.r < p.x + PIPE_W + 4) {
      if (bird.y - bird.r < p.top || bird.y + bird.r > p.top + GAP) return true
    }
  }
  return false
}

function loop() {
  ctx.clearRect(0, 0, W, H)

  // Sky gradient
  const sky = ctx.createLinearGradient(0, 0, 0, H)
  sky.addColorStop(0, '#70c5ce')
  sky.addColorStop(1, '#b8e8f0')
  ctx.fillStyle = sky
  ctx.fillRect(0, 0, W, H)

  if (state === 'playing') {
    frame++
    bird.vy += GRAVITY
    bird.y += bird.vy

    if (frame % PIPE_INTERVAL === 0) {
      const top = 60 + Math.random() * (H - GAP - 100)
      pipes.push({ x: W, top, scored: false })
    }

    pipes.forEach(p => {
      p.x -= PIPE_SPEED
      if (!p.scored && p.x + PIPE_W < bird.x) {
        p.scored = true
        score++
        if (score > best) best = score
      }
    })
    pipes = pipes.filter(p => p.x > -PIPE_W - 10)

    const groundHit = bird.y + bird.r >= H - 20 || bird.y - bird.r <= 0
    if (groundHit || pipes.some(hits)) {
      state = 'dead'
    }
  }

  pipes.forEach(drawPipe)
  drawGround()
  drawBird()
  drawUI()

  raf = requestAnimationFrame(loop)
}

function onKey(e) {
  if (e.code === 'Space') { e.preventDefault(); flap() }
}

function enableKeys() { window.addEventListener('keydown', onKey) }
function disableKeys() { window.removeEventListener('keydown', onKey) }

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas) {
    ctx = canvas.getContext('2d')
    reset()
    loop()
  }
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  window.removeEventListener('keydown', onKey)
})
</script>
