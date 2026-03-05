<template>
  <div class="bg-white">
    
    <!-- Hero Section -->
    <header id="hero" class="relative pt-32 pb-24 px-6 min-h-[90vh] flex items-center overflow-hidden">
      <!-- Antigravity Particles -->
      <ParticleBackground />
      
      <div class="max-w-7xl mx-auto text-center w-full relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 backdrop-blur-md text-accent text-[11px] font-bold mb-10 uppercase tracking-[0.2em] border border-blue-100/50">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          下一代企业级技术交付专家
        </div>
        <h1 class="text-6xl md:text-7xl lg:text-[6.5rem] font-bold mb-8 text-gray-900 leading-[1] tracking-tight">
          用卓越工程造诣实现瞬时交付<br><span class="gradient-text text-5xl md:text-7xl lg:text-[5.5rem] font-black">构建数字未来</span>
        </h1>
        <p class="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed font-medium">
          在 FastX.ink，我们凝聚前沿技术造诣，为全球业务实现<span class="text-gray-900 font-bold italic">瞬时</span>且<span class="text-gray-900 font-bold italic">确定</span>的卓越交付。
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a href="#services" class="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
            开始您的项目
          </a>
          <a href="#portfolio" class="px-10 py-5 bg-white/50 backdrop-blur-md border border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-white transition-all">
            查看作品集
          </a>
        </div>
      </div>
    </header>

    <!-- 成功案例展示 - Bento Layout -->
    <section id="portfolio" class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-4 reveal-section">
          <div>
            <h2 class="text-5xl font-bold mb-4 tracking-tight text-gray-900">精选交付</h2>
            <p class="text-gray-500 font-medium text-lg">遵循 FastX 极简工程化原则的高性能数字产品。</p>
          </div>
        </div>
        
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[800px] reveal-section delay-200">
          <!-- Large Item -->
          <div class="md:col-span-2 md:row-span-2 glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer p-2">
            <div class="h-full w-full rounded-[2rem] overflow-hidden relative">
              <img :src="portfolio[0].image" class="w-full h-full object-cover transition-premium group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                <div class="flex gap-2 mb-4">
                  <span v-for="tag in portfolio[0].tags" :key="tag" class="text-[10px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 capitalize">{{ tag }}</span>
                </div>
                <h3 class="text-3xl font-bold text-white mb-2">{{ portfolio[0].title }}</h3>
                <p class="text-gray-300 text-lg">{{ portfolio[0].desc }}</p>
              </div>
            </div>
          </div>
          
          <!-- Small Items -->
          <div v-for="(project, i) in portfolio.slice(1)" :key="i" class="md:col-span-2 glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer p-2">
            <div class="h-full w-full rounded-[2rem] overflow-hidden relative">
              <img :src="project.image" class="w-full h-full object-cover transition-premium group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent p-10 flex flex-col justify-end">
                <div class="flex gap-2 mb-4">
                  <span v-for="tag in project.tags" :key="tag" class="text-[10px] font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 capitalize">{{ tag }}</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-300">{{ project.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务领域 -->
    <section id="services" class="py-32 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 reveal-section">
          <h2 class="text-4xl font-bold mb-4 tracking-tight text-gray-900">全栈技术服务能力</h2>
          <p class="text-gray-500 font-medium">基于 2026 年主流技术栈，为您打造弹性、可扩展的数字资产。</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 reveal-section delay-200">
          <div v-for="service in services" :key="service.name" 
            class="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-500 border border-gray-100 group"
          >
            <div class="w-14 h-14 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <component :is="service.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ service.name }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed font-medium">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 交付流程 -->
    <section id="process" class="py-32 bg-gray-900 text-white rounded-[3rem] mx-6">
      <div class="max-w-7xl mx-auto px-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold mb-6 italic tracking-tight">How We Commit?</h2>
          <p class="text-gray-400 font-medium text-lg">我们将复杂的开发流程，简化为四个直观的交付阶段。</p>
        </div>
        <div class="grid md:grid-cols-4 gap-12 relative">
          <div v-for="(step, i) in steps" :key="i" class="relative group">
            <div class="text-7xl font-black text-white/5 absolute -top-12 -left-4 pointer-events-none group-hover:text-accent/10 transition-colors">
              0{{ i + 1 }}
            </div>
            <h4 class="text-xl font-bold mb-6 relative z-10">{{ step.title }}</h4>
            <p class="text-sm text-gray-400 leading-relaxed font-medium relative z-10">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 FAQ -->
    <section id="faq" class="py-32 px-6 max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-center tracking-tight text-gray-900">常见问题解答</h2>
      <div class="space-y-6">
        <details v-for="(q, i) in faqs" :key="i" 
          class="group p-8 rounded-2xl border border-gray-100 open:bg-blue-50/30 transition-all duration-300"
        >
          <summary class="list-none font-bold text-xl cursor-pointer flex justify-between items-center text-gray-900">
            {{ q.question }}
            <Plus class="w-6 h-6 text-accent group-open:rotate-45 transition-transform" />
          </summary>
          <p class="mt-6 text-gray-500 leading-relaxed font-medium text-lg">
            {{ q.answer }}
          </p>
        </details>
      </div>
    </section>

    <!-- 底部召唤 - Redesigned Premium CTA -->
    <section class="py-32 px-6 relative overflow-hidden bg-gray-900">
      <!-- Deep Dynamic Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 opacity-90"></div>
      <div class="absolute inset-0 opacity-20 pointer-events-none hero-grid animate-pulse-slow"></div>
      
      <div class="max-w-4xl mx-auto text-center relative z-10 reveal-section">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight text-white">
          准备好启动您的<span class="gradient-text">数字蓝图</span>了吗？
        </h2>
        <p class="mb-14 text-blue-100/70 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          立即联系 FastX.ink 首席技术专家，获取一份为您量身定制的技术架构建议书。
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a href="mailto:hi@fastx.ink" class="px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">
            联系 hi@fastx.ink
          </a>
          <router-link to="/contact" class="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
            预约咨询
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ParticleBackground from '../components/ParticleBackground.vue'
import { 
  Zap,
  Globe,
  Database,
  Cpu,
  Monitor, 
  Smartphone, 
  Layers,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Plus
} from 'lucide-vue-next'

const revealSections = ref([])

onMounted(() => {
  const sections = document.querySelectorAll('.reveal-section')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  
  sections.forEach(section => observer.observe(section))
})

const portfolio = [
  {
    title: '智能物流调度管理系统',
    desc: '为某出海企业定制的自动化物流调度平台，降低了 30% 的人工成本。',
    tags: ['React', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '社区 15 分钟生活圈 App',
    desc: '极致流畅的原生体验，集成地图服务与即时支付功能。',
    tags: ['Flutter', 'iOS/Android'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '品牌私域新零售小程序',
    desc: '支撑百万级日活的高并发架构，助力品牌实现数字化增长。',
    tags: ['Wechat', 'Retail'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
  }
]

const services = [
  { name: 'Web 门户与管理系统', icon: Globe, desc: '利用 Next.js 的服务端渲染技术，提供极致的加载速度与 SEO 表现。' },
  { name: '多端 App 研发', icon: Smartphone, desc: 'Flutter 一套代码覆盖双端，大幅降低开发成本，保障原生级交互质感。' },
  { name: 'SaaS 与云原生架构', icon: Cpu, desc: '深耕 Docker/Kubernetes 部署，为您的业务提供弹性扩容的后端支撑。' }
]

const steps = [
  { title: '深度策略咨询', desc: '梳理核心逻辑，产出 PRD 与技术可行性评估报告，绝不盲目开工。' },
  { title: '瞬时架构原型', desc: '48小时内产出高保真 UI 与可交互原型，快速确认产品方向。' },
  { title: '看板式开发', desc: '客户实时在线监控 Git 提交历史与测试进度，交付过程透明可见。' },
  { title: '全生命周期售后', desc: '提供源码交付、技术文档移交及为期一年的系统稳定性保障。' }
]

const faqs = [
  {
    question: '交付后是否提供全部源代码？',
    answer: '是的。FastX.ink 承诺所有项目在尾款结清后，完整移交 Git 仓库权限、部署脚本及所有技术文档，不设任何技术壁垒。'
  },
  {
    question: '如果后期业务增长，系统支持扩容吗？',
    answer: '当然。我们的“瞬时架构”基于容器化设计，天然支持弹性伸缩。无论是日活一千还是日活十万，架构层级都预留了扩容方案。'
  },
  {
    question: '你们的收费标准是怎样的？',
    answer: '我们采用“阶梯式计费”。根据功能的复杂度与预估工时给出固定报价，拒绝低价入场后期恶意加价的行为。'
  }
]
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
.delay-400 { transition-delay: 400ms; }

@keyframes logo-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.98); }
}

.animate-pulse-slow {
  animation: logo-pulse 4s ease-in-out infinite;
}
</style>
