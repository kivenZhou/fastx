<script setup>
import { useI18n } from 'vue-i18n'
import SectionHeader from './SectionHeader.vue'
import FadeContent from './bits/FadeContent.vue'
import SpotlightCard from './bits/SpotlightCard.vue'

const { t, tm, te } = useI18n()
const sections = ['install', 'add', 'switch', 'advanced', 'backup']

const spotlightColors = [
  'rgba(129, 140, 248, 0.3)',
  'rgba(167, 139, 250, 0.3)',
  'rgba(99, 102, 241, 0.35)',
  'rgba(251, 191, 36, 0.25)',
  'rgba(56, 189, 248, 0.25)',
]

function sectionItems(key) {
  return tm(`tutorial.sections.${key}.items`) || []
}

function sectionKey(key, field) {
  return `tutorial.sections.${key}.${field}`
}
</script>

<template>
  <section id="tutorial" class="py-20 sm:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeader
        :label="t('tutorial.label')"
        :title="t('tutorial.title')"
        :subtitle="t('tutorial.subtitle')"
      />

      <div class="space-y-5">
        <FadeContent
          v-for="(key, i) in sections"
          :key="key"
          :delay="i * 60"
          :threshold="0.1"
        >
          <SpotlightCard
            class-name="!p-0 !rounded-[20px] glass-panel border-white/8"
            :spotlight-color="spotlightColors[i]"
          >
            <article class="rounded-[18px] p-6 sm:p-8">
              <h3 class="text-xl font-semibold text-white mb-4">{{ t(`tutorial.sections.${key}.title`) }}</h3>
              <ol class="space-y-3 mb-4">
                <li
                  v-for="(item, j) in sectionItems(key)"
                  :key="j"
                  class="flex gap-3 text-sm text-[#c7cad4]"
                >
                  <span class="shrink-0 w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-300 text-xs font-mono flex items-center justify-center border border-indigo-500/20">
                    {{ j + 1 }}
                  </span>
                  {{ item }}
                </li>
              </ol>
              <p
                v-if="te(sectionKey(key, 'tip'))"
                class="text-sm text-emerald-300/90 bg-emerald-500/8 border border-emerald-500/15 rounded-xl px-4 py-3"
              >
                💡 {{ t(sectionKey(key, 'tip')) }}
              </p>
              <p
                v-if="te(sectionKey(key, 'warn'))"
                class="text-sm text-amber-300/90 bg-amber-500/8 border border-amber-500/15 rounded-xl px-4 py-3 mt-3"
              >
                ⚠️ {{ t(sectionKey(key, 'warn')) }}
              </p>
            </article>
          </SpotlightCard>
        </FadeContent>
      </div>
    </div>
  </section>
</template>
