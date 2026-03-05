<template>
  <footer class="py-20 px-6 bg-gray-50 border-t border-gray-100">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-bold text-sm">FX</div>
          <span class="text-lg font-bold text-gray-900">FastX.ink</span>
        </div>
        <p class="text-gray-400 text-sm italic mono">Infinite Logic, Instant Delivery.</p>
      </div>
      
      <nav class="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium font-sans">
        <router-link to="/" class="hover:text-accent transition-colors">首页</router-link>
        <router-link to="/solutions" class="hover:text-accent transition-colors">解决方案</router-link>
        <router-link to="/cases" class="hover:text-accent transition-colors">成功案例</router-link>
        <router-link to="/about" class="hover:text-accent transition-colors">关于团队</router-link>
        <router-link to="/contact" class="hover:text-accent transition-colors">联系我们</router-link>
      </nav>
    </div>
    
    <div class="mt-12 text-center text-gray-300 text-xs font-sans tracking-wide">
      © 2026 FastX Technology Studio. Designed for Enterprises.
    </div>
  </footer>
</template>
