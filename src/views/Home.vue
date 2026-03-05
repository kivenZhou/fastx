<template>
  <div class="bg-white">

    <!-- Hero Section -->
    <header id="hero" class="relative pt-32 pb-24 px-6 min-h-[90vh] flex items-center overflow-hidden">
      <ParticleBackground />

      <div class="max-w-7xl mx-auto text-center w-full relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 backdrop-blur-md text-accent text-[11px] font-bold mb-10 uppercase tracking-[0.2em] border border-blue-100/50">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          {{ $t('home.badge') }}
        </div>
        <h1 class="text-6xl md:text-7xl lg:text-[6.5rem] font-bold mb-8 text-gray-900 leading-[1] tracking-tight">
          {{ $t('home.title1') }}<br><span class="gradient-text text-5xl md:text-7xl lg:text-[5.5rem] font-black">{{ $t('home.title2') }}</span>
        </h1>
        <p class="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed font-medium">
          {{ $t('home.desc') }}<span class="text-gray-900 font-bold italic">{{ $t('home.desc_instant') }}</span>{{ $t('home.desc_and') }}<span class="text-gray-900 font-bold italic">{{ $t('home.desc_certain') }}</span>{{ $t('home.desc_end') }}
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a href="#services" class="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
            {{ $t('home.cta_start') }}
          </a>
          <a href="#portfolio" class="px-10 py-5 bg-white/50 backdrop-blur-md border border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-white transition-all">
            {{ $t('home.cta_portfolio') }}
          </a>
        </div>
      </div>
    </header>

    <!-- Portfolio - Bento Layout -->
    <section id="portfolio" class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-4 reveal-section">
          <div>
            <h2 class="text-5xl font-bold mb-4 tracking-tight text-gray-900">{{ $t('home.portfolio_title') }}</h2>
            <p class="text-gray-500 font-medium text-lg">{{ $t('home.portfolio_sub') }}</p>
          </div>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[800px] reveal-section delay-200">
          <!-- Large Item -->
          <div class="md:col-span-2 md:row-span-2 glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer p-2">
            <div class="h-full w-full rounded-[2rem] overflow-hidden relative">
              <img :src="portfolioImages[0]" class="w-full h-full object-cover transition-premium group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                <div class="flex gap-2 mb-4">
                  <span v-for="tag in portfolioTags[0]" :key="tag" class="text-[10px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 capitalize">{{ tag }}</span>
                </div>
                <h3 class="text-3xl font-bold text-white mb-2">{{ $t('home.portfolio_items[0].title') }}</h3>
                <p class="text-gray-300 text-lg">{{ $t('home.portfolio_items[0].desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Small Items -->
          <div v-for="(img, i) in portfolioImages.slice(1)" :key="i" class="md:col-span-2 glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer p-2">
            <div class="h-full w-full rounded-[2rem] overflow-hidden relative">
              <img :src="img" class="w-full h-full object-cover transition-premium group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent p-10 flex flex-col justify-end">
                <div class="flex gap-2 mb-4">
                  <span v-for="tag in portfolioTags[i+1]" :key="tag" class="text-[10px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 capitalize">{{ tag }}</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">{{ $t(`home.portfolio_items[${i+1}].title`) }}</h3>
                <p class="text-gray-300">{{ $t(`home.portfolio_items[${i+1}].desc`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-32 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 reveal-section">
          <h2 class="text-4xl font-bold mb-4 tracking-tight text-gray-900">{{ $t('home.services_title') }}</h2>
          <p class="text-gray-500 font-medium">{{ $t('home.services_sub') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 reveal-section delay-200">
          <div v-for="(service, i) in servicesIcons" :key="i"
            class="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-500 border border-gray-100 group">
            <div class="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <component :is="service.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ $t(`home.services_items[${i}].name`) }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed font-medium">{{ $t(`home.services_items[${i}].desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="py-32 bg-gray-900 text-white rounded-[3rem] mx-6">
      <div class="max-w-7xl mx-auto px-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold mb-6 italic tracking-tight">How We Commit?</h2>
          <p class="text-gray-400 font-medium text-lg">{{ $t('home.process_sub') }}</p>
        </div>
        <div class="grid md:grid-cols-4 gap-12 relative">
          <div v-for="(_, i) in [0,1,2,3]" :key="i" class="relative group">
            <div class="text-7xl font-black text-white/5 absolute -top-12 -left-4 pointer-events-none group-hover:text-accent/10 transition-colors">
              0{{ i + 1 }}
            </div>
            <h4 class="text-xl font-bold mb-6 relative z-10">{{ $t(`home.steps_items[${i}].title`) }}</h4>
            <p class="text-sm text-gray-400 leading-relaxed font-medium relative z-10">{{ $t(`home.steps_items[${i}].desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-32 px-6 max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-center tracking-tight text-gray-900">{{ $t('home.faq_title') }}</h2>
      <div class="space-y-6">
        <details v-for="(_, i) in [0,1,2]" :key="i"
          class="group p-8 rounded-2xl border border-gray-100 open:bg-blue-50/30 transition-all duration-300">
          <summary class="list-none font-bold text-xl cursor-pointer flex justify-between items-center text-gray-900">
            {{ $t(`home.faqs_items[${i}].question`) }}
            <Plus class="w-6 h-6 text-accent group-open:rotate-45 transition-transform" />
          </summary>
          <p class="mt-6 text-gray-500 leading-relaxed font-medium text-lg">
            {{ $t(`home.faqs_items[${i}].answer`) }}
          </p>
        </details>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-32 px-6 relative overflow-hidden bg-gray-900">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 opacity-90"></div>
      <div class="absolute inset-0 opacity-20 pointer-events-none hero-grid animate-pulse-slow"></div>

      <div class="max-w-4xl mx-auto text-center relative z-10 reveal-section">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight text-white">
          {{ $t('home.cta_title1') }}<span class="gradient-text">{{ $t('home.cta_title_gradient') }}</span>{{ $t('home.cta_title2') }}
        </h2>
        <p class="mb-14 text-blue-100/70 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          {{ $t('home.cta_desc') }}
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a href="mailto:hi@fastx.ink" class="px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">
            {{ $t('home.cta_email') }}
          </a>
          <router-link to="/contact" class="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
            {{ $t('home.cta_book') }}
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ParticleBackground from '../components/ParticleBackground.vue'
import { Globe, Smartphone, Cpu, Plus } from 'lucide-vue-next'

const { t } = useI18n()

// Static assets (images/icons) stay in JS, translatable text goes to $t()
const portfolioImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
]
const portfolioTags = [
  ['React', 'SaaS'],
  ['Flutter', 'iOS/Android'],
  ['Wechat', 'Retail']
]
const servicesIcons = [
  { icon: Globe },
  { icon: Smartphone },
  { icon: Cpu }
]

onMounted(() => {
  const sections = document.querySelectorAll('.reveal-section')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.1 })
  sections.forEach(section => observer.observe(section))
})
</script>

<style scoped>
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}
.delay-200 { transition-delay: 200ms; }

@keyframes logo-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.98); }
}
.animate-pulse-slow { animation: logo-pulse 4s ease-in-out infinite; }
</style>
