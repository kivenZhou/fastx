<script setup>
import { useI18n } from 'vue-i18n'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'
import BorderGlow from './bits/BorderGlow.vue'

const { t } = useI18n()
const steps = ['1', '2', '3']
const colors = [
  ['#818cf8', '#a78bfa', '#38bdf8'],
  ['#a78bfa', '#c084fc', '#818cf8'],
  ['#38bdf8', '#818cf8', '#a78bfa'],
]
</script>

<template>
  <section id="start" class="py-20 sm:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeader
        :label="t('steps.label')"
        :title="t('steps.title')"
        :subtitle="t('steps.subtitle')"
      />

      <div class="grid md:grid-cols-3 gap-6">
        <FadeContent
          v-for="(n, idx) in steps"
          :key="n"
          :delay="idx * 120"
          :threshold="0.15"
        >
          <BorderGlow
            :border-radius="20"
            :colors="colors[idx]"
            background-color="#0a0c14"
            class-name="h-full"
          >
            <div class="p-7 sm:p-8 h-full">
              <div
                class="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xl text-white mb-5 shadow-lg shadow-indigo-500/30"
              >
                {{ n }}
              </div>
              <h3 class="font-semibold text-xl text-white mb-3">{{ t(`steps.items.${n}.title`) }}</h3>
              <p class="text-sm text-[#9ca3af] leading-relaxed">{{ t(`steps.items.${n}.desc`) }}</p>
            </div>
          </BorderGlow>
        </FadeContent>
      </div>
    </div>
  </section>
</template>
