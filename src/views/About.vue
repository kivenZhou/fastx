<template>
  <div class="bg-white pb-32">
    <!-- Premium Header Area -->
    <section class="relative py-32 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Team" class="w-full h-full object-cover opacity-10">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-white"></div>
      </div>
      
      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center" ref="headerRef" :class="[headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out']">
        <div class="inline-flex items-center space-x-2 bg-indigo-100/50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-indigo-200/50">
          <span>定义技术新高度</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">驱动未来的技术先锋。</h1>
        <p class="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          反重力科技（Antigravity Solutions）创立的初衷极为纯粹：用世界顶尖的软件工程造诣，为心怀雄心的企业打造真正能改变格局的数字驱动引擎。
        </p>
      </div>
    </section>

    <!-- Content Bento Layout -->
    <section class="container mx-auto px-6 max-w-7xl mt-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <!-- Vision / Philosophy -->
        <div class="md:col-span-8 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl group" ref="visionRef" :class="[visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-100']">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent pointer-events-none"></div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
          
          <div class="relative z-10 max-w-2xl">
            <h3 class="text-xs uppercase tracking-widest text-blue-400 font-bold mb-6">我们的信条</h3>
            <h2 class="text-3xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight">不懈追求绝对的代码质量与极简美学。</h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              在快消式的软件外包时代，我们选择成为异类。我们坚信，优秀的代码如同一台精密运转的 V8 发动机，不仅要跑得快，更要稳定、可扩展。而 UI 设计，则是这台引擎的豪华内饰，理应让人一见倾心。
            </p>
            <p class="text-slate-400 text-lg leading-relaxed font-light">
              从硅谷的架构思维到顶尖设计系统，我们把全球最优秀的实践准则带给每一位合作伙伴，彻底重塑您的数字化壁垒。
            </p>
          </div>
        </div>

        <!-- Metric -->
        <div class="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center group hover:bg-slate-50 transition-colors" ref="metricRef" :class="[metricVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-200']">
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-500">
            <span class="text-blue-600 font-bold text-2xl">AG</span>
          </div>
          <div class="text-6xl font-black text-slate-900 mb-2 tracking-tight">10<span class="text-blue-600 text-4xl">+</span></div>
          <div class="text-slate-500 font-medium">行业深耕经验年限</div>
        </div>

        <!-- Team Highlights -->
        <div class="md:col-span-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] p-10 border border-slate-200 relative overflow-hidden" ref="teamRef" :class="[teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-300']">
          <div class="relative z-10">
             <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">资深纯粹的极客团队</h3>
             <p class="text-slate-600 leading-relaxed max-w-sm mb-8">
               我们没有冗杂的销售流程。与您对接的是经历了百亿级流量洗礼的架构师与荣获多项大奖的主设计师。
             </p>
             <div class="flex space-x-4">
                <div class="w-12 h-12 rounded-full bg-slate-300 border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-500 text-sm">Tech</div>
                <div class="w-12 h-12 rounded-full bg-slate-300 border-2 border-white shadow-sm -ml-6 flex items-center justify-center font-bold text-slate-500 text-sm z-10">UX</div>
                <div class="w-12 h-12 rounded-full bg-slate-300 border-2 border-white shadow-sm -ml-6 flex items-center justify-center font-bold text-slate-500 text-sm z-20">Pro</div>
             </div>
          </div>
        </div>

        <!-- Values Map -->
        <div class="md:col-span-6 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" ref="valuesRef" :class="[valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-400']">
          <h3 class="text-2xl font-bold text-slate-900 mb-8 tracking-tight">全栈式交付能力</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="font-bold text-slate-900 mb-2">云原生架构设计</div>
              <div class="text-sm text-slate-500">K8s, Docker, CI/CD 自动化部署保障。</div>
            </div>
            <div>
              <div class="font-bold text-slate-900 mb-2">金融级安全防御</div>
              <div class="text-sm text-slate-500">防 SQL 注入，高频限流与数据双向加密。</div>
            </div>
            <div>
              <div class="font-bold text-slate-900 mb-2">像素级视觉还原</div>
              <div class="text-sm text-slate-500">100% 还原设计稿，追求每一处弧度与留白。</div>
            </div>
            <div>
              <div class="font-bold text-slate-900 mb-2">7x24 小时运维护航</div>
              <div class="text-sm text-slate-500">全天候监控预警机制，突发状况秒级响应。</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const headerRef = ref(null)
const headerVisible = ref(false)
useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerVisible.value = true
})

const visionRef = ref(null)
const visionVisible = ref(false)
useIntersectionObserver(visionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) visionVisible.value = true
})

const metricRef = ref(null)
const metricVisible = ref(false)
useIntersectionObserver(metricRef, ([{ isIntersecting }]) => {
  if (isIntersecting) metricVisible.value = true
})

const teamRef = ref(null)
const teamVisible = ref(false)
useIntersectionObserver(teamRef, ([{ isIntersecting }]) => {
  if (isIntersecting) teamVisible.value = true
})

const valuesRef = ref(null)
const valuesVisible = ref(false)
useIntersectionObserver(valuesRef, ([{ isIntersecting }]) => {
  if (isIntersecting) valuesVisible.value = true
})
</script>
