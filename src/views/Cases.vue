<template>
  <div class="bg-slate-50 pb-32">
    <!-- Header -->
    <section class="relative py-32 bg-white overflow-hidden border-b border-slate-100">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" alt="Cases Background" class="w-full h-full object-cover opacity-5">
        <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
      </div>
      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center" ref="headerRef" :class="[headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', 'transition-all duration-1000 ease-out']">
        <div class="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-slate-200/50">
          <span>匠心新作 · 行业标杆</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">卓越，有迹可循</h1>
        <p class="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          浏览我们为全球顶尖企业构建的数字案例。从华丽的前端视觉，到坚如磐石的后端底层，每一处细节皆是匠心。
        </p>
      </div>
    </section>

    <!-- Cases Grid -->
    <section class="container mx-auto px-6 max-w-7xl mt-24" ref="gridRef" :class="[gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20', 'transition-all duration-1000 ease-out delay-100']">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        <div v-for="(project, i) in cases" :key="i" class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-3xl aspect-[16/10] mb-8 border border-slate-200 shadow-sm group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">
            <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
            
            <div class="absolute top-6 left-6 flex space-x-2">
              <span v-for="tag in project.tags" :key="tag" class="bg-white/90 backdrop-blur-md text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <div class="flex items-center text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">
            {{ project.industry }}
          </div>
          <h3 class="text-3xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
          <p class="text-lg text-slate-500 leading-relaxed">{{ project.summary }}</p>
        </div>

      </div>
      
      <div class="mt-24 text-center">
        <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          与我们探讨您的项目构想
        </router-link>
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

const gridRef = ref(null)
const gridVisible = ref(false)
useIntersectionObserver(gridRef, ([{ isIntersecting }]) => {
  if (isIntersecting) gridVisible.value = true
})

const cases = [
  {
    title: '重塑全球新零售版图：某头部生鲜电商云生态',
    summary: '我们从零重构了其高并发的用户端 APP 及后端仓储 ERP 系统，实现百万级日活下的毫秒级响应，将订单流转效率提升超过 200%。',
    industry: '新零售 / 电商',
    tags: ['APP开发', '微服务', 'UI设计'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200'
  },
  {
    title: '数字驱动金融创新：海某独角兽持牌机构官网及交易大厅',
    summary: '极简且稳重的高端视觉语言融合复杂的金融数据计算逻辑，支持多端数据实时下发。其系统稳定性达到了惊人的 99.999%。',
    industry: '金融科技',
    tags: ['PC官网', '数据大屏', '安全防御'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200'
  },
  {
    title: '智慧医疗的超级入口：某三甲医院千万级挂号微信平台',
    summary: '打破医疗信息孤岛。我们在微信生态内构筑了全流程无感支付与报告推送系统，用适老化的交互设计赢得了百万患者的好评。',
    industry: '智慧医疗',
    tags: ['微信小程序', '适老化UI', '云原生'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200'
  },
  {
    title: '工业4.0时代标杆：某制造企业云端 IoT 管理中枢',
    summary: '硬核工业设备的软件神经网。通过数据清洗与云端建模，管理者可在任何设备的浏览器内，俯瞰上万台机器的高精度实时三维渲染孪生画面。',
    industry: '工业智造',
    tags: ['IoT', '3D数据可视化', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200'
  }
]
</script>
