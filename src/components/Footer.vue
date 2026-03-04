<template>
  <footer class="bg-slate-50 pt-20 pb-10 border-t border-slate-200 text-slate-600">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center space-x-2 mb-6 text-slate-900">
          <div class="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-lg">AG</div>
          <span class="text-xl font-bold tracking-wider">反重力科技</span>
        </div>
        <p class="max-w-md leading-relaxed">
          为全球企业提供高端软件定制与开发服务。我们专注于企业官网、PC端、WAP端、小程序及移动应用的打造，用卓越的技术与设计助力企业数字化转型。
        </p>
      </div>

      <div>
        <h4 class="text-lg font-bold mb-6 text-slate-900">快速链接</h4>
        <ul class="space-y-4">
          <li><router-link to="/" class="hover:text-accent transition-colors">官网首页</router-link></li>
          <li><router-link to="/about" class="hover:text-accent transition-colors">关于我们</router-link></li>
          <li><router-link to="/contact" class="hover:text-accent transition-colors">联系我们</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold mb-6 text-slate-900">联系方式</h4>
        <ul class="space-y-4">
          <li class="flex items-center"><span class="font-medium mr-2">邮箱:</span> hello@antigravity.cn</li>
          <li class="flex items-center"><span class="font-medium mr-2">电话:</span> 400-123-4567</li>
          <li class="flex items-start"><span class="font-medium mr-2 shrink-0">地址:</span> <span>北京市海淀区中关村互联网金融中心 12 层</span></li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between">
      <p class="text-sm text-slate-500">© 2026 北京反重力科技有限公司 版权所有。 京ICP备12345678号</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <span class="hover:text-accent cursor-pointer transition-colors text-sm">微信公众号</span>
        <span class="hover:text-accent cursor-pointer transition-colors text-sm">知乎</span>
        <span class="hover:text-accent cursor-pointer transition-colors text-sm">微博</span>
      </div>
    </div>
  </footer>
</template>
