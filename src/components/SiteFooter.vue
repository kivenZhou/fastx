<script setup>
import { useI18n } from 'vue-i18n'
import { Github, Star, Download } from 'lucide-vue-next'
import { brandIconPng } from '../brand.js'
import { OFFICIAL_SITE, RELEASE_REPO, SITE_REPO, githubRepoUrl, githubReleasesUrl } from '../config'

const { t } = useI18n()
const year = new Date().getFullYear()
const appSourceUrl = githubRepoUrl(RELEASE_REPO)
const siteSourceUrl = githubRepoUrl(SITE_REPO)
const releasesUrl = githubReleasesUrl()
const siteHost = OFFICIAL_SITE.replace(/^https?:\/\//, '')
</script>

<template>
  <footer class="py-10 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto glass-panel rounded-2xl border border-white/8 px-6 py-8 flex flex-col gap-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <img :src="brandIconPng" alt="" class="w-8 h-8 rounded-lg opacity-90" />
          <div>
            <div class="font-semibold text-sm text-white flex items-center gap-2">
              TraeHop
              <span class="text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-200 border border-emerald-400/20">{{ t('hero.officialBadge') }}</span>
            </div>
            <div class="text-xs text-[#6b7280]">{{ t('footer.tagline') }}</div>
            <div class="text-xs text-[#4b5563] mt-0.5">
              {{ t('footer.officialPrefix') }} ·
              <a :href="OFFICIAL_SITE" class="text-indigo-300/80 hover:text-indigo-200 no-underline transition-colors">{{ siteHost }}</a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2">
          <a
            :href="appSourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#9ca3af] bg-white/5 border border-white/10 no-underline hover:text-white hover:border-indigo-400/30 transition-colors"
          >
            <Github :size="13" />
            {{ t('footer.appSource') }}
          </a>
          <a
            :href="siteSourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#9ca3af] bg-white/5 border border-white/10 no-underline hover:text-white hover:border-indigo-400/30 transition-colors"
          >
            <Github :size="13" />
            {{ t('footer.siteSource') }}
          </a>
          <a
            :href="releasesUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#9ca3af] bg-white/5 border border-white/10 no-underline hover:text-white hover:border-indigo-400/30 transition-colors"
          >
            <Download :size="13" />
            {{ t('footer.releases') }}
          </a>
          <a
            :href="appSourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-amber-100 bg-amber-500/10 border border-amber-400/25 no-underline hover:bg-amber-500/20 transition-colors"
          >
            <Star :size="13" />
            {{ t('footer.star') }}
          </a>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#6b7280]">
        <div>{{ t('footer.license') }}</div>
        <div>{{ t('footer.rights', { year }) }}</div>
      </div>
    </div>
  </footer>
</template>
