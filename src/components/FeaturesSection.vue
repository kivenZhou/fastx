<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { X } from 'lucide-vue-next'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'
import SpotlightCard from './bits/SpotlightCard.vue'
import CircularGallery from './bits/CircularGallery.vue'
import BorderGlow from './bits/BorderGlow.vue'
import { buildGalleryItems } from '../utils/galleryImages.js'

const { t, tm, locale } = useI18n()
const featureKeys = ['switch', 'local', 'login', 'usage', 'backup', 'tray']
const notDoItems = tm('notDo.items')
const galleryItems = ref([])

const spotlightColors = [
  'rgba(99, 102, 241, 0.35)',
  'rgba(124, 92, 252, 0.35)',
  'rgba(56, 189, 248, 0.3)',
  'rgba(167, 139, 250, 0.3)',
  'rgba(129, 140, 248, 0.35)',
  'rgba(192, 132, 252, 0.3)',
]

function refreshGallery() {
  galleryItems.value = buildGalleryItems(
    featureKeys,
    (key) => t(`features.items.${key}.icon`),
    (key) => t(`features.items.${key}.title`)
  )
}

watch(locale, refreshGallery, { immediate: true })
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
        <div class="h-[280px] sm:h-[340px] rounded-2xl overflow-hidden glass-panel border border-white/8">
          <CircularGallery
            v-if="galleryItems.length"
            :key="locale"
            :items="galleryItems"
            :bend="2.5"
            text-color="#e8eaef"
            :border-radius="0.06"
            font="600 22px Inter, sans-serif"
            :scroll-speed="1.5"
          />
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
