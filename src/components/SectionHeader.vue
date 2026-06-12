<script setup>
import FadeContent from './bits/FadeContent.vue'
import ShinyText from './bits/ShinyText.vue'

defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <FadeContent :threshold="0.2" class="text-center mb-14">
    <div class="mb-3">
      <ShinyText
        :text="label"
        class-name="text-xs font-semibold tracking-[0.2em] uppercase"
        color="#6366f1"
        shine-color="#e0e7ff"
        :speed="3"
      />
    </div>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-[#9ca3af] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
      {{ subtitle }}
    </p>
  </FadeContent>
</template>
