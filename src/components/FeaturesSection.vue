<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { X } from 'lucide-vue-next'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'
import SpotlightCard from './bits/SpotlightCard.vue'
import BorderGlow from './bits/BorderGlow.vue'

const { t, tm, locale } = useI18n()
const featureKeys = ['switch', 'local', 'login', 'usage', 'backup', 'tray']
const notDoItems = computed(() => {
  void locale.value
  return tm('notDo.items')
})

const galleryMeta = {
  switch: { from: '#6366f1', to: '#818cf8' },
  local: { from: '#7c3aed', to: '#a78bfa' },
  login: { from: '#0284c7', to: '#38bdf8' },
  usage: { from: '#9333ea', to: '#c084fc' },
  backup: { from: '#4f46e5', to: '#818cf8' },
  tray: { from: '#7e22ce', to: '#c084fc' },
}

const spotlightColors = [
  'rgba(99, 102, 241, 0.35)',
  'rgba(124, 92, 252, 0.35)',
  'rgba(56, 189, 248, 0.3)',
  'rgba(167, 139, 250, 0.3)',
  'rgba(129, 140, 248, 0.35)',
  'rgba(192, 132, 252, 0.3)',
]
</script>

<template>
  <section id="features" class="py-20 sm:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeader
        :label="t('features.label')"
        :title="t('features.title')"
        :subtitle="t('features.subtitle')"
      />

      <FadeContent :threshold="0.1" class="mb-12">
        <div class="feature-gallery glass-panel border border-white/8 rounded-2xl p-4 sm:p-5">
          <div class="feature-gallery__track">
            <div
              v-for="key in featureKeys"
              :key="key"
              class="feature-gallery__card"
              :style="{
                background: `linear-gradient(135deg, ${galleryMeta[key]?.from ?? '#6366f1'}, ${galleryMeta[key]?.to ?? '#818cf8'})`
              }"
            >
              <span class="feature-gallery__emoji">{{ t(`features.items.${key}.icon`) }}</span>
              <span class="feature-gallery__title">{{ t(`features.items.${key}.title`) }}</span>
            </div>
          </div>
        </div>
        <p class="text-center text-xs text-[#6b7280] mt-3">{{ t('features.galleryHint') }}</p>
      </FadeContent>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <FadeContent
          v-for="(key, i) in featureKeys"
          :key="key"
          :delay="i * 80"
          :threshold="0.1"
        >
          <SpotlightCard
            class-name="!p-6 !rounded-2xl glass-panel border-white/8 h-full hover:border-indigo-500/20 transition-colors"
            :spotlight-color="spotlightColors[i]"
          >
            <div class="text-3xl mb-4">{{ t(`features.items.${key}.icon`) }}</div>
            <h3 class="font-semibold text-white mb-2 text-lg">{{ t(`features.items.${key}.title`) }}</h3>
            <p class="text-sm text-[#9ca3af] leading-relaxed">{{ t(`features.items.${key}.desc`) }}</p>
          </SpotlightCard>
        </FadeContent>
      </div>

      <FadeContent :threshold="0.15">
        <BorderGlow
          :border-radius="20"
          :colors="['#f87171', '#fb923c', '#fbbf24']"
          background-color="#0a0c14"
          class-name="w-full"
        >
          <div class="p-6 sm:p-8">
            <h3 class="font-semibold text-white mb-4 flex items-center gap-2 text-lg">
              <span class="text-red-400 text-xl">✕</span>
              {{ t('notDo.title') }}
            </h3>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="(item, i) in notDoItems"
                :key="i"
                class="flex items-start gap-2.5 text-sm text-[#9ca3af]"
              >
                <X :size="16" class="text-red-400/80 shrink-0 mt-0.5" />
                {{ item }}
              </li>
            </ul>
          </div>
        </BorderGlow>
      </FadeContent>
    </div>
  </section>
</template>
