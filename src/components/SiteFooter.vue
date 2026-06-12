<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-10 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto glass-panel rounded-2xl border border-white/8 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="/icon.svg" alt="" class="w-8 h-8 rounded-lg opacity-90" />
        <div>
          <div class="font-semibold text-sm text-white">Trae Session</div>
          <div class="text-xs text-[#6b7280]">{{ t('footer.tagline') }}</div>
        </div>
      </div>
      <div class="text-xs text-[#6b7280] text-center sm:text-right">
        <div>{{ t('footer.license') }}</div>
        <div>{{ t('footer.rights', { year }) }}</div>
      </div>
    </div>
  </footer>
</template>
