<script setup>
import { useI18n } from 'vue-i18n'
import FadeContent from './bits/FadeContent.vue'
import SpotlightCard from './bits/SpotlightCard.vue'

const { t } = useI18n()
const keys = ['store', 'session', 'mac', 'win']
</script>

<template>
  <section class="py-16 sm:py-20 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <FadeContent :threshold="0.2">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">{{ t('privacy.title') }}</h2>
        <SpotlightCard
          class-name="!p-0 !rounded-2xl glass-panel border-white/8"
          spotlight-color="rgba(99, 102, 241, 0.25)"
        >
          <div class="rounded-[15px] overflow-hidden">
            <table class="w-full text-sm">
              <tbody>
                <tr
                  v-for="(key, i) in keys"
                  :key="key"
                  class="border-b border-white/5 last:border-0"
                  :class="i % 2 ? 'bg-white/[0.02]' : ''"
                >
                  <td class="px-5 py-4 text-[#9ca3af] w-36 sm:w-44 font-medium">
                    {{ t(`privacy.items.${key}.label`) }}
                  </td>
                  <td class="px-5 py-4 font-mono text-xs sm:text-sm text-[#e8eaef]">
                    {{ t(`privacy.items.${key}.value`) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </SpotlightCard>
      </FadeContent>
    </div>
  </section>
</template>
