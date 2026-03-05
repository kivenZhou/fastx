<template>
  <div class="bg-white min-h-screen pb-32">
    <section class="relative py-36 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
           style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center reveal">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold mb-10 border border-blue-100 uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
          {{ $t('solutions.badge') }}
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">
          {{ $t('solutions.title1') }}<span class="gradient-text">{{ $t('solutions.title_gradient') }}</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          {{ $t('solutions.desc') }}
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 max-w-7xl mt-8 space-y-40">

      <!-- PC Web -->
      <section id="web" class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-40">
        <div class="lg:w-1/2 reveal-left">
          <div class="w-16 h-16 icon-card-blue rounded-2xl flex items-center justify-center mb-8 shadow-sm glow-blue">
            <Monitor class="w-8 h-8" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{{ $t('solutions.web_title') }}</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">{{ $t('solutions.web_desc') }}</p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li v-for="(item, i) in $tm('solutions.web_items')" :key="i" class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>{{ rt(item) }}
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group reveal-right">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Web Dev" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent group-hover:from-slate-900/10 transition-all duration-700"></div>
        </div>
      </section>

      <!-- App -->
      <section id="application" class="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-40">
        <div class="lg:w-1/2 reveal-right">
          <div class="w-16 h-16 icon-card-indigo rounded-2xl flex items-center justify-center mb-8 shadow-sm glow-indigo">
            <Smartphone class="w-8 h-8" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{{ $t('solutions.app_title') }}</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">{{ $t('solutions.app_desc') }}</p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li v-for="(item, i) in $tm('solutions.app_items')" :key="i" class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>{{ rt(item) }}
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group reveal-left">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80" alt="App Dev" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent group-hover:from-slate-900/10 transition-all duration-700"></div>
        </div>
      </section>

      <!-- Mini Program -->
      <section id="mini" class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-40">
        <div class="lg:w-1/2 reveal-left">
          <div class="w-16 h-16 icon-card-green rounded-2xl flex items-center justify-center mb-8 shadow-sm glow-green">
            <Layout class="w-8 h-8" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{{ $t('solutions.mini_title') }}</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">{{ $t('solutions.mini_desc') }}</p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li v-for="(item, i) in $tm('solutions.mini_items')" :key="i" class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>{{ rt(item) }}
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group reveal-right">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Mini Program" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent group-hover:from-slate-900/10 transition-all duration-700"></div>
        </div>
      </section>

      <!-- SaaS/ERP -->
      <section id="sys" class="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-40">
        <div class="lg:w-1/2 reveal-right">
          <div class="w-16 h-16 icon-card-orange rounded-2xl flex items-center justify-center mb-8 shadow-sm glow-orange">
            <Layout class="w-8 h-8" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{{ $t('solutions.sys_title') }}</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">{{ $t('solutions.sys_desc') }}</p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li v-for="(item, i) in $tm('solutions.sys_items')" :key="i" class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>{{ rt(item) }}
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group reveal-left">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="SaaS" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent group-hover:from-slate-900/10 transition-all duration-700"></div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Monitor, Smartphone, Layout } from 'lucide-vue-next'

const { rt, tm } = useI18n()
const route = useRoute()

const scrollToHash = (hash) => {
  if (!hash) return
  const element = document.querySelector(hash)
  if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
}

watch(() => route.hash, (newHash) => {
  if (newHash && route.path === '/solutions') scrollToHash(newHash)
})

onMounted(() => {
  if (route.hash) scrollToHash(route.hash)
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.12 }
  )
  els.forEach(el => observer.observe(el))
})
</script>
