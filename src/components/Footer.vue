<template>
  <footer class="py-20 px-6 bg-gray-50 border-t border-gray-100">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <div class="flex items-center gap-2 mb-4">
          <img src="../assets/images/logo.png" alt="FastX.ink Logo" class="h-8 w-auto" />
        </div>
        <p class="text-gray-400 text-sm italic mono">{{ $t('footer.tagline') }}</p>
      </div>

      <nav class="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium font-sans">
        <router-link to="/" class="hover:text-accent transition-colors">{{ $t('nav.home') }}</router-link>
        <router-link to="/solutions" class="hover:text-accent transition-colors">{{ $t('nav.solutions') }}</router-link>
        <router-link to="/cases" class="hover:text-accent transition-colors">{{ $t('nav.cases') }}</router-link>
        <router-link to="/about" class="hover:text-accent transition-colors">{{ $t('nav.about') }}</router-link>
        <router-link to="/contact" class="hover:text-accent transition-colors">{{ $t('nav.contact') }}</router-link>
      </nav>
    </div>

    <div class="mt-12 text-center text-gray-300 text-xs font-sans tracking-wide">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>
