<template>
  <div class="bg-slate-50 pb-32">
    <!-- Premium Header Area -->
    <section class="relative py-32 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style="background-image: radial-gradient(#0088cc 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center" ref="headerRef" :class="[headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8', 'transition-all duration-700 ease-out']">
        <div class="inline-flex items-center space-x-2 bg-blue-50 text-accent px-4 py-1.5 rounded-full text-xs font-bold mb-8 border border-blue-100">
          <span>开启专业交付新篇章</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">开启您的数字化旅程。</h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          伟大的产品源自深度的沟通。告诉我们您的业务诉求，我们的架构专家团队将为您量身定制技术顶层设计与确定性交付方案。
        </p>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="container mx-auto px-6 max-w-6xl mt-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- Contact Information Block -->
        <div class="lg:col-span-5 flex flex-col justify-between" ref="infoRef" :class="[infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-100']">
          <div>
            <h3 class="text-3xl font-bold text-slate-900 mb-8 tracking-tight">直接对话技术核心</h3>
            <p class="text-slate-500 leading-relaxed mb-12 max-w-sm">
              无论您是处于概念验证阶段初创公司，还是寻求系统重构的五百强集团，我们都随时待命。
            </p>

            <div class="space-y-10">
              <div v-for="contact in contactInfo" :key="contact.label" class="flex items-start space-x-5 group">
                <div class="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <component :is="contact.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-lg text-slate-900">{{ contact.label }}</h4>
                  <p class="text-slate-500 mt-1 leading-relaxed">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden group">
            <div class="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
            <h4 class="font-bold text-blue-900 mb-2 relative z-10">企业定制专线</h4>
            <p class="text-blue-700 font-medium relative z-10">专属客户经理 1 对 1 深度咨询，免费出具选型建议与项目估排期方案。</p>
          </div>
        </div>

        <!-- Premium Contact Form -->
        <div class="lg:col-span-7" ref="formRef" :class="[formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out delay-200']">
          <div class="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
             <!-- Form Glow -->
             <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-[80px] pointer-events-none opacity-50"></div>
             
             <form class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative z-10" @submit.prevent>
              <div class="space-y-3">
                <label class="text-sm font-semibold text-slate-700 block">如何称呼您</label>
                <input type="text" placeholder="如：张经理" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>
              
              <div class="space-y-3">
                <label class="text-sm font-semibold text-slate-700 block">您的任职企业</label>
                <input type="text" placeholder="如：XX 科技有限公司" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>

              <div class="md:col-span-2 space-y-3">
                <label class="text-sm font-semibold text-slate-700 block">工作邮箱或联系电话</label>
                <input type="text" placeholder="接收方案用的邮箱或便于沟通的手机号" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal">
              </div>

              <div class="md:col-span-2 space-y-3">
                <label class="text-sm font-semibold text-slate-700 block">您期望的技术服务包含哪些？</label>
                <div class="relative">
                  <select class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-slate-900 font-medium cursor-pointer">
                    <option>大型企业 PC 端开发架构</option>
                    <option>多端移动应用 (iOS / Android 原生或跨平台)</option>
                    <option>微信/全生态小程序深度定制</option>
                    <option>复杂的数字化业务后端中枢系统</option>
                    <option>全栈式咨询与综合开发方案</option>
                  </select>
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 space-y-3">
                <label class="text-sm font-semibold text-slate-700 block">项目背景与核心诉求简述</label>
                <textarea rows="4" placeholder="向我们简单描述您当前面临的问题，或是您伟大想法的轮廓..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal resize-none"></textarea>
              </div>

              <div class="md:col-span-2 mt-4">
                <button type="submit" class="w-full bg-accent text-white py-4 px-8 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-1 text-lg">
                  立即开启专家咨询
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-4 leading-relaxed tracking-wide">提交信息即表示您同意我们的<a href="#" class="text-accent hover:underline">隐私条款</a>。FastX.ink 将为您提供最高等级的商业信息保护。</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

const headerRef = ref(null)
const headerVisible = ref(false)
useIntersectionObserver(headerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) headerVisible.value = true
})

const infoRef = ref(null)
const infoVisible = ref(false)
useIntersectionObserver(infoRef, ([{ isIntersecting }]) => {
  if (isIntersecting) infoVisible.value = true
})

const formRef = ref(null)
const formVisible = ref(false)
useIntersectionObserver(formRef, ([{ isIntersecting }]) => {
  if (isIntersecting) formVisible.value = true
})

const contactInfo = [
  { icon: Mail, label: '需求咨询与商务专线', value: 'hello@fastx.ink' },
  { icon: Phone, label: '技术支持与紧急响应', value: '400-888-FAST 转 1' },
  { icon: MapPin, label: 'FastX.ink Studio 研发中心', value: '北京市朝阳区 · 数字技术创新中心 A 座高端交付区' }
]
</script>
