<script setup lang="ts">
import { computed, useSlots } from 'vue';

interface GradientTextProps {
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
}

const props = withDefaults(defineProps<GradientTextProps>(), {
  className: '',
  colors: () => ['#27FF64', '#27FF64', '#A0FFBC'],
  animationSpeed: 8,
  direction: 'horizontal'
});

const slots = useSlots();
const text = computed(() => (slots.default?.() ?? []).map(v => v.children).join(''));

const gradientAngle = computed(() =>
  props.direction === 'horizontal' ? 'to right' : props.direction === 'vertical' ? 'to bottom' : 'to bottom right'
);

const gradientColors = computed(() => [...props.colors, props.colors[0]].join(', '));

const style = computed(() => ({
  '--gradient-colors': gradientColors.value,
  '--gradient-angle': gradientAngle.value,
  '--gradient-duration': `${props.animationSpeed}s`,
  '--gradient-size':
    props.direction === 'horizontal' ? '300% 100%' : props.direction === 'vertical' ? '100% 300%' : '300% 300%'
}));
</script>

<template>
  <span class="gradient-text" :class="className" :style="style">
    {{ text }}
  </span>
</template>

<style scoped>
.gradient-text {
  display: inline-block;
  background-image: linear-gradient(var(--gradient-angle), var(--gradient-colors));
  background-size: var(--gradient-size);
  background-repeat: repeat;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-shift var(--gradient-duration) ease-in-out infinite alternate;
}

@keyframes gradient-shift {
  to {
    background-position: 100% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-text {
    animation: none;
    background-position: 50% 50%;
  }
}
</style>
