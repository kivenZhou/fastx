<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'
import { brandIconPng } from '../brand.js'

const { t, locale } = useI18n()
const scrolled = ref(false)

const nav = [
  { id: 'download', key: 'nav.download' },
  { id: 'features', key: 'nav.features' },
  { id: 'start', key: 'nav.start' },
  { id: 'tutorial', key: 'nav.tutorial' },
  { id: 'faq', key: 'nav.faq' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleLang() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
    <div
      class="site-header__bar max-w-6xl mx-auto flex items-center justify-between gap-4 h-14 px-4 sm:px-5 transition-all duration-300"
      :class="{ 'site-header__bar--scrolled': scrolled }"
    >
      <a href="#" class="flex items-center gap-2.5 shrink-0 no-underline text-white">
        <img :src="brandIconPng" alt="" class="w-8 h-8 rounded-lg shadow-lg shadow-indigo-500/30" />
        <span class="font-semibold text-[15px] tracking-tight">TraeHop</span>
      </a>
      <nav class="hidden md:flex items-center gap-1">
        <a v-for="item in nav" :key="item.id" :href="`#${item.id}`" class="px-3 py-2 text-sm text-[#9ca3af] hover:text-white rounded-lg transition-colors no-underline hover:bg-white/5">{{ t(item.key) }}</a>
      </nav>
      <div class="flex items-center gap-2">
        <button type="button" class="px-3 py-1.5 text-xs font-medium text-[#9ca3af] hover:text-white border border-white/10 rounded-lg bg-white/5 transition-colors cursor-pointer" @click="toggleLang">{{ locale === 'zh' ? 'EN' : '中文' }}</button>
        <a href="#download" class="btn-primary !py-2 !px-4 !text-sm hidden sm:inline-flex">{{ t('nav.download') }}</a>
      </div>
    </div>
  </header>
</template>
