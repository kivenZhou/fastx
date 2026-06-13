<script setup>
import { useI18n } from 'vue-i18n'
import { Download } from 'lucide-vue-next'
import { DOWNLOADS } from '../config'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'

const { t } = useI18n()

const platforms = Object.entries(DOWNLOADS).map(([key, p]) => ({
  ...p,
  key,
  colors:
    key === 'win'
      ? ['#38bdf8', '#818cf8', '#a78bfa']
      : key === 'macArm'
        ? ['#818cf8', '#a78bfa', '#c084fc']
        : ['#a78bfa', '#c084fc', '#818cf8'],
  emoji: key === 'win' ? '🪟' : '🍎',
}))
</script>

<template>
  <section id="download" class="py-20 sm:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeader
        :label="t('download.label')"
        :title="t('download.title')"
        :subtitle="t('download.subtitle')"
      />

      <div class="grid sm:grid-cols-3 gap-5 mb-8">
        <FadeContent
          v-for="(p, i) in platforms"
          :key="p.key"
          :delay="i * 100"
          :threshold="0.15"
        >
          <a
            :href="p.url"
            :target="p.external ? '_blank' : undefined"
            :rel="p.external ? 'noopener noreferrer' : undefined"
            class="hover-card block h-full p-6 sm:p-7 text-center no-underline text-inherit"
            :style="{ '--card-accent': p.colors[0] }"
          >
            <div class="text-4xl mb-4">{{ p.emoji }}</div>
            <h3 class="font-semibold text-white text-lg mb-1">{{ t(p.labelKey) }}</h3>
            <p class="text-sm text-[#6b7280] mb-6">{{ t(p.hintKey) }}</p>
            <span class="btn-primary !w-full !text-sm !py-2.5">
              <Download :size="16" />
              {{ t('download.btn') }}
            </span>
          </a>
        </FadeContent>
      </div>

      <FadeContent :threshold="0.2">
        <div class="glass-panel rounded-[14px] p-4 sm:p-5 text-sm text-[#9ca3af] border border-amber-500/20">
          <p class="mb-2 text-amber-200/90">⚠️ {{ t('download.macNote') }}</p>
          <code class="block font-mono text-xs text-amber-100/80 bg-black/40 rounded-lg p-3 overflow-x-auto">
            {{ t('download.macCmd') }}
          </code>
        </div>
      </FadeContent>
    </div>
  </section>
</template>
