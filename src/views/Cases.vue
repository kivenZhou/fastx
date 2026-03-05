<template>
  <div class="bg-white pb-32">
    <section class="relative py-36 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
           style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center reveal">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold mb-10 border border-blue-100 uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
          {{ $t('cases.badge') }}
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">
          {{ $t('cases.title1') }}<span class="gradient-text">{{ $t('cases.title_gradient') }}</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          {{ $t('cases.desc') }}
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 max-w-7xl mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div v-for="(item, i) in casesItems" :key="i"
             class="group cursor-pointer reveal"
             :style="{ transitionDelay: `${i * 100}ms` }">
          <div class="relative overflow-hidden rounded-3xl aspect-[16/10] mb-8 border border-slate-100 shadow-sm
                      group-hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-700">
            <img :src="item.image" :alt="$t(`cases.items[${i}].title`)"
                 class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-5 left-5 flex gap-2">
              <span v-for="tag in item.tags" :key="tag"
                    class="bg-white/90 backdrop-blur-md text-slate-800 px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                {{ tag }}
              </span>
            </div>
            <div class="absolute bottom-5 right-5 text-white/30 font-black text-5xl leading-none group-hover:text-white/60 transition-colors duration-500 select-none">
              0{{ i + 1 }}
            </div>
          </div>

          <div class="text-[11px] font-bold text-blue-500 mb-3 tracking-[0.18em] uppercase">{{ $t(`cases.items[${i}].industry`) }}</div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900 group-hover:text-accent transition-colors tracking-tight leading-snug">{{ $t(`cases.items[${i}].title`) }}</h3>
          <p class="text-base text-slate-500 leading-relaxed font-medium">{{ $t(`cases.items[${i}].summary`) }}</p>
        </div>
      </div>

      <div class="mt-24 text-center reveal">
        <router-link to="/contact"
          class="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-blue-200/50 transform hover:-translate-y-1 text-lg gap-3">
          {{ $t('cases.cta') }}
          <span class="text-xl">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})

const casesItems = [
  { image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200', tags: ['APP开发', '微服务', 'UI设计'] },
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200', tags: ['PC官网', '数据大屏', '安全防御'] },
  { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200', tags: ['微信小程序', '适老化UI', '云原生'] },
  { image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200', tags: ['IoT', '3D数据可视化', 'SaaS'] }
]
</script>
