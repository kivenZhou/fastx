<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown } from 'lucide-vue-next'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'
import SpotlightCard from './bits/SpotlightCard.vue'

const { t } = useI18n()
const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']
const open = ref('q1')

function toggle(key) {
  open.value = open.value === key ? '' : key
}
</script>

<template>
  <section id="faq" class="py-20 sm:py-28 relative">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <SectionHeader :label="t('faq.label')" :title="t('faq.title')" />

      <div class="space-y-3">
        <FadeContent
          v-for="(key, i) in keys"
          :key="key"
          :delay="i * 50"
          :threshold="0.1"
        >
          <SpotlightCard
            :class-name="`!p-0 !rounded-[14px] glass-panel overflow-hidden transition-colors ${open === key ? 'border-indigo-500/30' : 'border-white/8'}`"
            :spotlight-color="open === key ? 'rgba(129, 140, 248, 0.35)' : 'rgba(129, 140, 248, 0.12)'"
          >
            <div class="rounded-[13px] overflow-hidden">
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer bg-transparent border-0 text-white font-medium hover:bg-white/[0.02] transition-colors"
                @click="toggle(key)"
              >
                <span>{{ t(`faq.items.${key}.q`) }}</span>
                <ChevronDown
                  :size="18"
                  class="shrink-0 text-[#6b7280] transition-transform duration-300"
                  :class="open === key ? 'rotate-180 text-indigo-400' : ''"
                />
              </button>
              <div
                v-show="open === key"
                class="px-5 pb-4 text-sm text-[#9ca3af] leading-relaxed border-t border-white/5 pt-3"
              >
                {{ t(`faq.items.${key}.a`) }}
              </div>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </div>
  </section>
</template>
