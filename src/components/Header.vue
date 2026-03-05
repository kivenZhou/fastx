<template>
  <div class="relative w-full">
    <header
      :class="[
        'fixed top-0 w-full h-20 flex items-center transition-all duration-300 z-50',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent border-b border-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <router-link to="/" class="flex items-center gap-2 group" @click="isMenuOpen = false">
            <div class="w-10 h-10 bg-accent rounded flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
              FX
            </div>
            <span class="text-xl font-bold tracking-tight text-gray-900">
              FastX<span class="text-accent">.ink</span>
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="hover:text-accent transition-colors"
            active-class="text-accent"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <button
            @click="toggleLocale"
            class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all"
            :class="currentLocale === 'zh'
              ? 'border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100'
              : 'border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100'"
          >
            <span>{{ currentLocale === 'zh' ? '中' : 'EN' }}</span>
            <span class="opacity-40">|</span>
            <span>{{ currentLocale === 'zh' ? 'EN' : '中' }}</span>
          </button>

          <router-link to="/contact" class="hidden md:inline-flex bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition shadow-lg shadow-gray-200">
            {{ $t('nav.cta') }}
          </router-link>

          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative z-[100]">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <transition name="mobile-menu" @after-leave="isClosing = false">
      <div v-show="isMenuOpen" class="fixed inset-0 bg-white z-[60] flex flex-col pt-24 px-6 md:hidden overflow-y-auto">
        <div class="flex flex-col space-y-8 pb-20">
          <router-link v-for="(item, index) in navItems" :key="item.path"
            :to="item.path"
            class="mobile-item border-b border-gray-50 pb-6 text-2xl font-bold text-gray-900 hover:text-accent transition-colors"
            :style="{ transitionDelay: `${index * 50}ms` }"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <!-- Mobile Language Toggle -->
          <button @click="toggleLocale"
            class="mobile-item text-left text-lg font-bold text-gray-500 hover:text-accent transition-colors border-b border-gray-50 pb-6">
            {{ currentLocale === 'zh' ? 'Switch to English' : '切换为中文' }}
          </button>
          <router-link to="/contact" class="mobile-item bg-gray-900 text-white text-center py-4 rounded-xl font-bold text-lg" @click="isMenuOpen = false">
            {{ $t('nav.cta') }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value)

const toggleLocale = () => {
  setLocale(currentLocale.value === 'zh' ? 'en' : 'zh')
}

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isClosing = ref(false)

watch(isMenuOpen, (val) => {
  if (val) {
    isClosing.value = false
    document.body.style.overflow = 'hidden'
  } else {
    isClosing.value = true
    document.body.style.overflow = ''
  }
})

const navItems = computed(() => [
  { name: t('nav.home'), path: '/' },
  { name: t('nav.solutions'), path: '/solutions' },
  { name: t('nav.cases'), path: '/cases' },
  { name: t('nav.about'), path: '/about' },
  { name: t('nav.contact'), path: '/contact' }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
header {
  transition-property: background-color, border-color, box-shadow, backdrop-filter;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-item {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1;
  transform: translateX(0);
}

.mobile-menu-enter-from .mobile-item {
  opacity: 0;
  transform: translateX(10px);
}

.mobile-menu-leave-to .mobile-item {
  opacity: 0;
  transform: translateX(-10px);
  transition-duration: 0.2s;
}
</style>
