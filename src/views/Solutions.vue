<template>
  <div class="bg-white min-h-screen pb-32">
    <!-- Solutions Header -->
    <section class="relative py-32 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style="background-image: radial-gradient(#0088cc 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center" ref="headerRef" :class="[headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8', 'transition-all duration-700 ease-out']">
        <div class="inline-flex items-center space-x-2 bg-blue-50 text-accent px-4 py-1.5 rounded-full text-xs font-bold mb-8 border border-blue-100">
          <span>全方位数字技术交付矩阵</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">我们的解决方案</h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          从底层架构到端侧交互，我们以严苛的工程化标准打造全场景数字资产。确保每一次技术连接都具备澎湃动力与极致稳定性。
        </p>
      </div>
    </section>

    <!-- Detailed Solutions -->
    <div class="container mx-auto px-6 max-w-7xl mt-24 space-y-40">
      
      <!-- PC Web -->
      <section id="web" class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-40" ref="webRef" :class="[webVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20', 'transition-all duration-1000 ease-out']">
        <div class="lg:w-1/2">
          <div class="bg-slate-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-8">
            <Monitor class="w-8 h-8 text-blue-600" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">企业级 PC 官网与管理平台</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">
            在宽广的桌面端，展现您恢弘的品牌气象。我们精通 Vue/React 生态，配合服务端渲染（SSR）技术，为您带来秒级首屏加载与极佳的 SEO 表现。同时，我们提供复杂的数据可视化看板与强大的 SaaS后台管理架构。
          </p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>高端品牌互动响应式网站</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>B2B / B2C 大型电商交易平台</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>复杂数据可视化大屏呈现</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>定制化 ERP / CRM 内部管理系统</li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Web Dev" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-700"></div>
        </div>
      </section>

      <!-- App -->
      <section id="application" class="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-40" ref="appRef" :class="[appVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20', 'transition-all duration-1000 ease-out delay-100']">
        <div class="lg:w-1/2">
          <div class="bg-slate-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-8">
            <Smartphone class="w-8 h-8 text-indigo-600" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">移动端 App (iOS & Android)</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">
            紧握指尖的无限可能。采用最新的跨平台框架或纯原生技术栈，确保在海量设备上维持 60fps 的丝滑体验。从底层 API 调用到上层丝滑动效，每一帧都极尽打磨。
          </p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>Swift & Kotlin 原生应用开发</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>Flutter / React Native 高性能混合开发</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>物联网 (IoT) 硬件通讯级控制应用</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>音视频与即时通讯底层集成</li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80" alt="App Dev" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-700"></div>
        </div>
      </section>

      <!-- Mini Program -->
      <section id="mini" class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-40" ref="miniRef" :class="[miniVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20', 'transition-all duration-1000 ease-out delay-200']">
        <div class="lg:w-1/2">
          <div class="bg-slate-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-8">
            <Layout class="w-8 h-8 text-emerald-600" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">全矩阵生态小程序</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">
            触手可及的超级入口。我们不仅帮您在微信、支付宝、抖音等生态中占得先机，更通过精妙的性能优化突破小程序的体积限制，实现等同于原生 App 的磅礴功能。
          </p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span>多端一致的云原生基础架构搭建</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span>复杂的社交电商与裂变玩法引擎</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span>O2O 线上线下一体化解决方案</li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Mini Program" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-700"></div>
        </div>
      </section>

      <!-- System Customization -->
      <section id="sys" class="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 scroll-mt-40" ref="sysRef" :class="[sysVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20', 'transition-all duration-1000 ease-out delay-300']">
        <div class="lg:w-1/2">
          <div class="bg-slate-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-8">
            <Layout class="w-8 h-8 text-orange-600" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">行业业务系统定制 (SaaS/ERP)</h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-8">
            数字化转型的核心骨架。我们深入理解垂直行业逻辑，为您构建从底层数据库设计到上层交互细节全定制的业务系统。在高并发、高可用与极致数据安全之间取得完美平衡。
          </p>
          <ul class="space-y-4 mb-10 text-slate-700">
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>多租户 SaaS 架构平台搭建</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>生产制造 ERP 与供应链管理系统</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>私有化部署与内网安全环境集成</li>
            <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>三方系统 (钉钉/飞书/企微) 深度打通</li>
          </ul>
        </div>
        <div class="lg:w-1/2 w-full aspect-video rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="SaaS" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-700"></div>
        </div>
      </section>
      
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useIntersectionObserver } from '@vueuse/core'
import { Monitor, Smartphone, Layout } from 'lucide-vue-next'

const route = useRoute()

const scrollToHash = (hash) => {
  if (!hash) return
  const element = document.querySelector(hash)
  if (element) {
    // Small delay to ensure any layout changes/overlays are clearing
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
}

watch(() => route.hash, (newHash) => {
  if (newHash && route.path === '/solutions') {
    scrollToHash(newHash)
  }
})

onMounted(() => {
  if (route.hash) {
    scrollToHash(route.hash)
  }
})

const headerRef = ref(null)
const headerVisible = ref(false)
useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerVisible.value = true
})

const webRef = ref(null)
const webVisible = ref(false)
useIntersectionObserver(webRef, ([{ isIntersecting }]) => {
  if (isIntersecting) webVisible.value = true
})

const appRef = ref(null)
const appVisible = ref(false)
useIntersectionObserver(appRef, ([{ isIntersecting }]) => {
  if (isIntersecting) appVisible.value = true
})

const miniRef = ref(null)
const miniVisible = ref(false)
useIntersectionObserver(miniRef, ([{ isIntersecting }]) => {
  if (isIntersecting) miniVisible.value = true
})

const sysRef = ref(null)
const sysVisible = ref(false)
useIntersectionObserver(sysRef, ([{ isIntersecting }]) => {
  if (isIntersecting) sysVisible.value = true
})
</script>
