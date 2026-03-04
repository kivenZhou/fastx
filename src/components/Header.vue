<template>
  <div class="relative w-full">
    <header 
      :class="[
        'fixed top-0 w-full h-20 flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        // Seamless design: remove border and shadow when menu is open
        (isMenuOpen || isClosing) 
          ? 'z-[70] bg-white border-transparent' 
          : (isScrolled ? 'z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'z-50 bg-white/50 backdrop-blur-sm border-b border-transparent')
      ]"
    >
      <div class="container mx-auto px-6 lg:px-12 flex items-center justify-between w-full">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group outline-none" @click="isMenuOpen = false">
          <div :class="[
            'w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-500',
            (isMenuOpen || isClosing) ? 'shadow-none scale-100' : 'shadow-lg shadow-slate-900/20 group-hover:scale-105'
          ]">AG</div>
          <span class="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">反重力科技</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <div v-for="item in navItems" :key="item.path" class="relative group px-1">
            <router-link 
              :to="item.path"
              class="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 outline-none flex items-center"
              active-class="text-slate-900 bg-slate-100"
            >
              {{ item.name }}
              <svg v-if="item.children" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </router-link>

            <!-- Dropdown -->
            <div v-if="item.children" class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div class="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-3 min-w-[240px]">
                <router-link 
                  v-for="child in item.children" 
                  :key="child.path" 
                  :to="child.path"
                  class="flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors group/link"
                >
                  <span class="text-sm font-semibold text-slate-900 group-hover/link:text-blue-600 transition-colors">{{ child.name }}</span>
                  <span class="text-xs text-slate-500 mt-0.5">{{ child.desc }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div class="flex items-center space-x-4">
          <a href="tel:4001234567" class="hidden lg:flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            400-123-4567
          </a>
          <router-link to="/contact" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-500/20">
             获取报价
          </router-link>
          
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative z-[80]">
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

    <!-- Mobile Menu Overlay -->
    <transition name="mobile-menu" @after-leave="isClosing = false">
      <div v-show="isMenuOpen" class="fixed inset-0 bg-white z-[60] flex flex-col pt-20 px-8 md:hidden overflow-y-auto">
        <div class="flex flex-col space-y-10 pb-20 mt-10">
          <div v-for="(item, index) in navItems" :key="item.path" 
            class="mobile-item" 
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <div v-if="item.children" class="space-y-6">
              <span class="text-2xl font-bold text-slate-900 block pb-2 border-b border-slate-100">{{ item.name }}</span>
              <div class="grid grid-cols-1 gap-6">
                <router-link 
                  v-for="child in item.children" 
                  :key="child.path" 
                  :to="child.path"
                  @click="isMenuOpen = false"
                  class="flex items-start group"
                >
                  <div class="flex flex-col">
                    <span class="text-lg font-bold text-slate-900 mb-0.5 group-active:text-blue-600 transition-colors">{{ child.name }}</span>
                    <span class="text-sm text-slate-500 leading-tight">{{ child.desc }}</span>
                  </div>
                </router-link>
              </div>
            </div>
            <router-link 
              v-else
              :to="item.path"
              @click="isMenuOpen = false"
              class="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors block pb-2 border-b border-slate-100"
            >
              {{ item.name }}
            </router-link>
          </div>
          
          <div class="mobile-item pt-4" :style="{ transitionDelay: `${navItems.length * 50}ms` }">
            <router-link to="/contact" @click="isMenuOpen = false" class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-lg font-bold text-white bg-slate-900 shadow-xl shadow-slate-900/20">
              获取方案报价
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isClosing = ref(false)

// Handle body scroll and z-index persistence
watch(isMenuOpen, (val) => {
  if (val) {
    isClosing.value = false
    document.body.style.overflow = 'hidden'
  } else {
    isClosing.value = true
    document.body.style.overflow = ''
  }
})

const navItems = [
  { name: '首页', path: '/' },
  { 
    name: '解决方案', 
    path: '/solutions',
    children: [
      { name: '企业级官网', path: '/solutions#web', desc: '高端响应式 PC 与移动端网站' },
      { name: '移动端应用 (APP)', path: '/solutions#application', desc: 'iOS & Android 原生/混合开发' },
      { name: '微信生态体验', path: '/solutions#mini', desc: '微信/支付宝等多平台小程序' },
      { name: '业务系统定制', path: '/solutions#sys', desc: 'SaaS、ERP、CRM 架构搭建' }
    ]
  },
  { name: '客户案例', path: '/cases' },
  { name: '关于反重力', path: '/about' }
]

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

/* Staggered Entrance Animation */
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
