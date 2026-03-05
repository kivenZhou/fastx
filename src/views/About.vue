<template>
  <div class="bg-white pb-32">
    <!-- Premium Header -->
    <section class="relative py-36 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
           style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center reveal" ref="headerRef">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold mb-10 border border-blue-100 uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
          构建数字驱动 Engine
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">驱动未来的<span class="gradient-text">技术交付</span>。</h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          FastX.ink Studio 创立的初衷极为纯粹：用世界顶尖的软件工程造诣，为心怀雄心的企业打造真正能改变格局的数字化资产。
        </p>
      </div>
    </section>

    <!-- Content Bento Layout -->
    <section class="container mx-auto px-6 max-w-7xl mt-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">

        <!-- Vision / Philosophy -->
        <div class="md:col-span-8 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl group reveal-left">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent pointer-events-none"></div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>
          <div class="absolute -left-10 -top-10 w-48 h-48 bg-indigo-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

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
        <div class="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center group hover:shadow-xl hover:border-blue-100 transition-all duration-500 reveal-right delay-100">
          <div class="w-16 h-16 icon-card-blue rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-500 glow-blue">
            <span class="text-blue-600 font-bold text-2xl">FX</span>
          </div>
          <div class="text-6xl font-black text-slate-900 mb-2 tracking-tight">10<span class="text-blue-500 text-4xl">+</span></div>
          <div class="text-slate-500 font-medium">行业深耕与交付经验</div>
        </div>

        <!-- Team Highlights -->
        <div class="md:col-span-6 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-[2.5rem] p-10 border border-slate-100 relative overflow-hidden reveal delay-200">
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">专业稳健的执行团队</h3>
            <p class="text-slate-600 leading-relaxed max-w-sm mb-8 font-medium italic">
              我们不仅是开发者，更是您的商业伙伴。FastX 聚集了具备跨国企业经验的架构师与追求极致平衡的主设计师。
            </p>
            <div class="flex">
              <div class="w-12 h-12 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-xs">Tech</div>
              <div class="w-12 h-12 rounded-full bg-indigo-500 border-2 border-white shadow-md -ml-4 flex items-center justify-center font-bold text-white text-xs z-10">UX</div>
              <div class="w-12 h-12 rounded-full bg-slate-700 border-2 border-white shadow-md -ml-4 flex items-center justify-center font-bold text-white text-xs z-20">Pro</div>
            </div>
          </div>
        </div>

        <!-- Values Map -->
        <div class="md:col-span-6 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-300">
          <h3 class="text-2xl font-bold text-slate-900 mb-8 tracking-tight">全栈式交付能力</h3>
          <div class="grid grid-cols-2 gap-6">
            <div class="group/item">
              <div class="font-bold text-slate-900 mb-2 group-hover/item:text-blue-600 transition-colors">云原生架构设计</div>
              <div class="text-sm text-slate-500">K8s, Docker, CI/CD 自动化部署保障。</div>
            </div>
            <div class="group/item">
              <div class="font-bold text-slate-900 mb-2 group-hover/item:text-blue-600 transition-colors">金融级安全防御</div>
              <div class="text-sm text-slate-500">防 SQL 注入，高频限流与数据双向加密。</div>
            </div>
            <div class="group/item">
              <div class="font-bold text-slate-900 mb-2 group-hover/item:text-blue-600 transition-colors">像素级视觉还原</div>
              <div class="text-sm text-slate-500">100% 还原设计稿，追求每一处弧度与留白。</div>
            </div>
            <div class="group/item">
              <div class="font-bold text-slate-900 mb-2 group-hover/item:text-blue-600 transition-colors">7x24 小时运维护航</div>
              <div class="text-sm text-slate-500">全天候监控预警机制，突发状况秒级响应。</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})

const headerRef = ref(null)
</script>
