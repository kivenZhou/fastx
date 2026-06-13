<script setup>
import { useI18n } from 'vue-i18n'
import { Download, Github, Star, ShieldCheck } from 'lucide-vue-next'
import { DOWNLOADS, OFFICIAL_SITE, RELEASE_REPO, githubRepoUrl, githubReleasesUrl } from '../config'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'

const { t } = useI18n()
const appSourceUrl = githubRepoUrl(RELEASE_REPO)
const releasesUrl = githubReleasesUrl()
const siteHost = OFFICIAL_SITE.replace(/^https?:\/\//, '')

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
        <div class="glass-panel rounded-[14px] p-4 sm:p-5 text-sm text-[#9ca3af] border border-amber-500/20 mb-5">
          <p class="mb-2 text-amber-200/90">⚠️ {{ t('download.macNote') }}</p>
          <code class="block font-mono text-xs text-amber-100/80 bg-black/40 rounded-lg p-3 overflow-x-auto">
            {{ t('download.macCmd') }}
          </code>
        </div>

        <div class="glass-panel rounded-[14px] p-5 sm:p-6 border border-emerald-500/20">
          <div class="flex items-start gap-3 mb-3">
            <ShieldCheck :size="20" class="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 class="font-semibold text-white text-sm mb-1">{{ t('download.officialTitle') }}</h3>
              <p class="text-sm text-[#9ca3af] leading-relaxed">{{ t('download.officialDesc', { site: siteHost }) }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2.5">
            <a
              :href="appSourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#d1d5db] bg-white/5 border border-white/10 no-underline hover:text-white hover:border-indigo-400/30 transition-colors"
            >
              <Github :size="14" />
              {{ t('download.viewSource') }}
            </a>
            <a
              :href="releasesUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#d1d5db] bg-white/5 border border-white/10 no-underline hover:text-white hover:border-indigo-400/30 transition-colors"
            >
              <Download :size="14" />
              {{ t('download.viewReleases') }}
            </a>
            <a
              :href="appSourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-amber-100 bg-amber-500/10 border border-amber-400/25 no-underline hover:bg-amber-500/20 transition-colors"
            >
              <Star :size="14" />
              {{ t('download.starRepo') }}
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  </section>
</template>
