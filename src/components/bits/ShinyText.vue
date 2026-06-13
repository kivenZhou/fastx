<script setup lang="ts">
import { computed } from 'vue';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
  disabled: false,
  speed: 2,
  className: '',
  color: '#b5b5b5',
  shineColor: '#ffffff',
  spread: 120
});

const style = computed(() => ({
  '--shiny-base': props.color,
  '--shiny-peak': props.shineColor,
  '--shiny-angle': `${props.spread}deg`,
  '--shiny-duration': `${props.speed}s`
}));
</script>

<template>
  <span
    :class="['shiny-text', className, { 'shiny-text--static': disabled }]"
    :style="style"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.shiny-text {
  display: inline-block;
  background-image: linear-gradient(
    var(--shiny-angle),
    var(--shiny-base) 0%,
    var(--shiny-base) 35%,
    var(--shiny-peak) 50%,
    var(--shiny-base) 65%,
    var(--shiny-base) 100%
  );
  background-size: 200% auto;
  background-position: 150% center;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shiny-sweep var(--shiny-duration) linear infinite;
}

.shiny-text--static {
  animation: none;
  background-position: center;
  -webkit-text-fill-color: var(--shiny-base);
  color: var(--shiny-base);
}

@keyframes shiny-sweep {
  to {
    background-position: -50% center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shiny-text {
    animation: none;
    background-position: center;
    -webkit-text-fill-color: var(--shiny-base);
    color: var(--shiny-base);
  }
}
</style>
