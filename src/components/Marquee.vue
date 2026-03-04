<template>
  <div class="overflow-hidden w-full flex space-x-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
    <div class="flex space-x-12 animate-marquee whitespace-nowrap items-center">
      <!-- First set of items -->
      <span v-for="(item, index) in items" :key="`a-${index}`" class="text-xl font-bold text-slate-800 tracking-widest uppercase">
        {{ item }}
      </span>
      <!-- Duplicate set for seamless loop -->
      <span v-for="(item, index) in items" :key="`b-${index}`" class="text-xl font-bold text-slate-800 tracking-widest uppercase">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.animate-marquee {
  animation: marquee 25s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
