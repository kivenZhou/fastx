<script setup>
import FloatingLines from './bits/FloatingLines.vue'
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">
    <FloatingLines
      class="absolute inset-0"
      :lines-gradient="['#818cf8', '#6366f1', '#a78bfa', '#38bdf8']"
      :enabled-waves="['middle', 'bottom']"
      :line-count="[3, 4]"
      :line-distance="[4, 5]"
      :animation-speed="0.5"
      :interactive="false"
      :parallax="false"
      mix-blend-mode="screen"
    />
    <div class="absolute inset-0 bg-[#05060a]/80" />
    <div
      class="absolute inset-0 opacity-[0.3]"
      style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060a]" />
  </div>
</template>
