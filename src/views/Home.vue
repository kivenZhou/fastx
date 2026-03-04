<template>
  <div class="bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
    
    <!-- Ultra-Premium Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <!-- High-End Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Corporate" class="w-full h-full object-cover opacity-10">
        <div class="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      </div>
      
      <!-- Sophisticated Background Gradient -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-blue-50/80 to-indigo-50/50 rounded-full blur-3xl opacity-70 mix-blend-multiply"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-50/60 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        
        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10" ref="heroRef" :class="[heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', 'transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]']">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div class="lg:w-3/5 text-center lg:text-left">
            <div class="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-100/50">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>2026 全新企业版发布</span>
            </div>
            
            <h1 class="text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8">
              构筑未来的<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">数字架构。</span>
            </h1>
            
            <p class="text-xl lg:text-2xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
              反重力科技为您提供世界级的高端软件服务矩阵。从极尽美学的大型企业 PC 官网，到承载海量并发的移动应用流水线，我们重新定义软件工艺。
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <router-link to="/contact" class="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-black transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] text-center transform hover:-translate-y-0.5">
                立即启动项目
              </router-link>
              <router-link to="/solutions" class="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all text-center group flex items-center justify-center">
                探索解决方案
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </router-link>
            </div>
          </div>
          
          <div class="lg:w-2/5 relative hidden lg:block">
            <!-- Abstract Hero Art representing cross-platform dev -->
            <div class="relative w-full aspect-square">
               <div class="absolute inset-4 bg-gradient-to-tr from-white to-slate-50 rounded-[3rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center justify-center p-8 z-10">
                 <!-- Mock UI elements to look techy and Apple-like -->
                 <div class="w-full h-12 bg-slate-100 rounded-xl mb-4 relative overflow-hidden">
                    <div class="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-500 rounded-xl opacity-20"></div>
                 </div>
                 <div class="w-3/4 h-8 bg-slate-100/50 rounded-lg mb-8 mr-auto"></div>
                 <div class="flex gap-4 w-full h-32 mb-8">
                   <div class="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 shadow-inner"></div>
                   <div class="flex-1 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100/50 shadow-inner"></div>
                 </div>
                 <div class="w-full flex justify-between items-center mt-auto">
                   <div class="flex gap-2">
                     <div class="w-8 h-8 rounded-full bg-slate-200"></div>
                     <div class="w-8 h-8 rounded-full bg-slate-200 -ml-4 border-2 border-white"></div>
                   </div>
                   <div class="px-4 py-2 bg-slate-900 text-white text-xs rounded-full font-bold">100% 同步</div>
                 </div>
               </div>
               
               <!-- Decorative floating cards -->
               <div class="absolute -right-8 top-12 w-48 h-32 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100/50 z-20 flex flex-col justify-center p-6 animate-[bounce_6s_infinite]">
                 <div class="flex items-center gap-3 mb-2">
                   <div class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
                   <div class="text-sm font-bold text-slate-800">性能级架构</div>
                 </div>
                 <div class="w-24 h-2 bg-slate-100 rounded-full mt-2">
                   <div class="w-full h-full bg-green-400 rounded-full"></div>
                 </div>
               </div>
               
               <div class="absolute -left-12 bottom-16 w-56 h-40 bg-slate-900 rounded-2xl shadow-2xl z-20 border border-slate-700/50 flex flex-col p-6 text-white animate-[bounce_7s_infinite_ease-in-out_reverse]">
                 <div class="text-xs text-slate-400 mb-2">全链路开发体系</div>
                 <div class="text-xl font-bold mb-4">PC / WAP / APP</div>
                 <div class="flex justify-between items-end mt-auto">
                   <div class="flex space-x-1 items-end">
                     <div class="w-2 h-6 bg-blue-500 rounded-t-sm"></div>
                     <div class="w-2 h-8 bg-blue-500 rounded-t-sm"></div>
                     <div class="w-2 h-12 bg-blue-400 rounded-t-sm"></div>
                     <div class="w-2 h-16 bg-cyan-400 rounded-t-sm"></div>
                   </div>
                   <div class="text-cyan-400 font-bold text-sm">+300% 效率</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By / Marquee -->
    <section class="border-y border-slate-100 bg-slate-50/50 py-10 relative z-10 mix-blend-multiply">
      <div class="container mx-auto px-6 mb-6">
        <p class="text-center text-sm font-medium text-slate-400 uppercase tracking-widest">深受全球 500+ 前瞻企业的信赖</p>
      </div>
      <div class="pb-2">
        <Marquee :items="['Tencent', 'Alibaba', 'ByteDance', 'NetEase', 'JD.com', 'Baidu', 'Meituan', 'Didi']" />
      </div>
    </section>

    <!-- Redesigned Services (Apple/Stripe Style Grid) -->
    <section class="py-32 bg-white relative">
      <div class="container mx-auto px-6 max-w-7xl" ref="servicesRef" :class="[servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', 'transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]']">
        <div class="max-w-3xl mb-20 text-center lg:text-left">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">为您重塑每一个终端。</h2>
          <p class="text-xl text-slate-500 leading-relaxed font-light">不仅仅是写代码。我们提供完整的商业逻辑分析、UI/UX 雕琢与底层高可用架构的全包服务。</p>
        </div>

        <!-- Bento Grid Approach -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          <!-- Large Card: PC Web -->
          <div class="lg:col-span-8 bg-slate-50 rounded-[2rem] p-10 lg:p-14 relative overflow-hidden group hover:bg-slate-100/80 transition-colors border border-slate-100">
            <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Monitor class="w-32 h-32 text-slate-900" />
            </div>
            <div class="relative z-10 max-w-lg">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-slate-100">
                <Monitor class="w-6 h-6 text-slate-700" />
              </div>
              <h3 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">高端桌面级官网与系统</h3>
              <p class="text-lg text-slate-500 leading-relaxed mb-8">
                专为大型跨国集团与前沿科技巨头打造。提供极具视觉冲击力的互动呈现、深度的 SEO 骨架优化，以及承载复杂数据的企业级中后台管理（SAAS/ERP）。
              </p>
              <router-link to="/solutions#web" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                探索 PC 端方案 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </router-link>
            </div>
          </div>

          <!-- Medium Card: Mobile/WAP -->
          <div class="lg:col-span-4 bg-slate-900 text-white rounded-[2rem] p-10 relative overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
            <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div class="relative z-10">
              <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/10">
                <Smartphone class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4 tracking-tight">移动端 / 原生 APP</h3>
              <p class="text-slate-400 leading-relaxed mb-8">
                React Native / Flutter 混合架构与 Swift/Kotlin 原生开发并举。极致流畅的动画，严密的设备底层调用，打造现象级应用体验。
              </p>
            </div>
          </div>

          <!-- Medium Card: Mini Programs -->
          <div class="lg:col-span-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2rem] p-10 relative border border-green-100/50 group">
            <div class="relative z-10">
              <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-green-100">
                <Layout class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">微信及多平台小程序</h3>
              <p class="text-slate-600 leading-relaxed mb-6">
                基于 Uni-app / Taro 的跨端能力，一次编写，覆盖微信、支付宝、抖音等多生态矩阵。轻量、高转化。
              </p>
            </div>
          </div>

          <!-- Medium Card: Custom Dev -->
          <div class="lg:col-span-6 bg-white rounded-[2rem] p-10 relative overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="relative z-10 flex flex-col h-full">
              <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-blue-600">
                <Layers class="w-6 h-6" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">深度定制化微服务架构</h3>
              <p class="text-slate-500 leading-relaxed max-w-sm mb-4">
                打破数据孤岛。采用 Spring Cloud / Go 构筑千万级并发架构能力。
              </p>
              <div class="mt-auto pt-6 flex -space-x-3 overflow-hidden">
                <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-bold font-mono">Vue</div>
                <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs font-bold font-mono">Go</div>
                <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-300 flex items-center justify-center text-xs font-bold font-mono">K8s</div>
                <div class="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-800 text-white flex items-center justify-center text-xs font-bold">+</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Development Process (Clean layout) -->
    <section class="py-32 bg-slate-50 border-y border-slate-100">
      <div class="container mx-auto px-6 max-w-7xl" ref="processRef" :class="[processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', 'transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]']">
        <div class="text-center mb-24">
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">极客工艺，严苛流程。</h2>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto font-light">代码，不应只是能跑，更该是一件艺术品。我们坚持行业最顶级的 DevOps 标准。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16 text-center lg:text-left relative">
          <!-- Connecting Line (hidden on mobile) -->
          <div class="hidden md:block absolute top-[28px] left-[10%] w-[80%] h-px bg-slate-200"></div>

          <div v-for="(step, i) in steps" :key="i" class="relative z-10 flex flex-col items-center lg:items-start group">
            <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xl font-bold text-slate-900 mb-8 transition-transform group-hover:-translate-y-2 group-hover:shadow-md">
              0{{ i + 1 }}
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">{{ step.title }}</h4>
            <p class="text-slate-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Area -->
    <section class="py-32 bg-white relative overflow-hidden">
      <!-- Mega glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/50 to-blue-50 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div class="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8">开始您的数字进化。</h2>
        <p class="text-2xl text-slate-500 mb-12 font-light">告诉我们您的伟大构想，我们将以最高标准将其落地。</p>
        <router-link to="/contact" class="inline-flex items-center justify-center px-10 py-5 rounded-full text-xl font-bold text-white bg-slate-900 shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:shadow-2xl hover:scale-105 hover:bg-black transition-all duration-300">
          获取免费项目评估
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import Marquee from '../components/Marquee.vue'
import { 
  Monitor, 
  Smartphone, 
  Layout, 
  Layers 
} from 'lucide-vue-next'

const heroRef = ref(null)
const heroVisible = ref(false)
useIntersectionObserver(heroRef, ([{ isIntersecting }]) => {
  if (isIntersecting) heroVisible.value = true
})

const servicesRef = ref(null)
const servicesVisible = ref(false)
useIntersectionObserver(servicesRef, ([{ isIntersecting }]) => {
  if (isIntersecting) servicesVisible.value = true
})

const processRef = ref(null)
const processVisible = ref(false)
useIntersectionObserver(processRef, ([{ isIntersecting }]) => {
  if (isIntersecting) processVisible.value = true
})

const steps = [
  { title: '需求与商业剖析', desc: '深度理解业务逻辑，进行全方位的架构评估与竞品分析。' },
  { title: '交互与视觉定义', desc: '产出高保真设计稿（Figma），明确品牌调性与微交互细节。' },
  { title: '敏捷与高质编码', desc: '采用前后端分离，高标准代码规范，定期里程碑演示。' },
  { title: '严苛测试与上线', desc: '全终端兼容性测试与压测，提供云服务无缝部署与运维交接。' }
]
</script>

<style scoped>
/* Specific clean typography overrides if necessary */
</style>
