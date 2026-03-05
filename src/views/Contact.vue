<template>
  <div class="bg-slate-50 pb-32">
    <!-- Premium Header -->
    <section class="relative py-36 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
           style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center reveal" ref="headerRef">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold mb-10 border border-blue-100 uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
          开启专业交付新篇章
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">开启您的<span class="gradient-text">数字化旅程</span>。</h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          伟大的产品源自深度的沟通。告诉我们您的业务诉求，我们的架构专家团队将为您量身定制技术顶层设计与确定性交付方案。
        </p>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="container mx-auto px-6 max-w-6xl mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        <!-- Contact Information Block -->
        <div class="lg:col-span-5 flex flex-col justify-between reveal-left">
          <div>
            <h3 class="text-3xl font-bold text-slate-900 mb-8 tracking-tight">直接对话技术核心</h3>
            <p class="text-slate-500 leading-relaxed mb-12 max-w-sm">
              无论您是处于概念验证阶段初创公司，还是寻求系统重构的五百强集团，我们都随时待命。
            </p>

            <div class="space-y-8">
              <div v-for="contact in contactInfo" :key="contact.label"
                   class="flex items-start gap-5 group">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-100 transition-all duration-400 shrink-0">
                  <component :is="contact.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-base text-slate-900">{{ contact.label }}</h4>
                  <p class="text-slate-500 mt-1 leading-relaxed text-sm">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden group">
            <div class="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500"></div>
            <h4 class="font-bold text-blue-900 mb-2 relative z-10">企业定制专线</h4>
            <p class="text-blue-700 font-medium relative z-10 text-sm leading-relaxed">专属客户经理 1 对 1 深度咨询，免费出具选型建议与项目估排期方案。</p>
          </div>
        </div>

        <!-- Premium Contact Form -->
        <div class="lg:col-span-7 reveal-right delay-100">
          <div class="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-[80px] pointer-events-none opacity-70"></div>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative z-10" @submit.prevent>
              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 block">如何称呼您</label>
                <input type="text" placeholder="如：张经理"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>

              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 block">您的任职企业</label>
                <input type="text" placeholder="如：XX 科技有限公司"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-sm font-semibold text-slate-700 block">工作邮箱或联系电话</label>
                <input type="text" placeholder="接收方案用的邮箱或便于沟通的手机号"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-sm font-semibold text-slate-700 block">您期望的技术服务包含哪些？</label>
                <div class="relative">
                  <select class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 appearance-none text-slate-900 font-medium cursor-pointer">
                    <option>大型企业 PC 端开发架构</option>
                    <option>多端移动应用 (iOS / Android 原生或跨平台)</option>
                    <option>微信/全生态小程序深度定制</option>
                    <option>复杂的数字化业务后端中枢系统</option>
                    <option>全栈式咨询与综合开发方案</option>
                  </select>
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-sm font-semibold text-slate-700 block">项目背景与核心诉求简述</label>
                <textarea rows="4" placeholder="向我们简单描述您当前面临的问题，或是您伟大想法的轮廓..."
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal resize-none"></textarea>
              </div>

              <div class="md:col-span-2 mt-2">
                <button type="submit"
                  class="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-bold hover:bg-accent hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 text-lg">
                  立即开启专家咨询
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                  提交信息即表示您同意我们的<a href="#" class="text-accent hover:underline">隐私条款</a>。FastX.ink 将为您提供最高等级的商业信息保护。
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

onMounted(() => {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})

const headerRef = ref(null)

const contactInfo = [
  { icon: Mail, label: '需求咨询与商务专线', value: 'hello@fastx.ink' },
  { icon: Phone, label: '技术支持与紧急响应', value: '400-888-FAST 转 1' },
  { icon: MapPin, label: 'FastX.ink Studio 研发中心', value: '北京市朝阳区 · 数字技术创新中心 A 座高端交付区' }
]
</script>
