<script setup>
import { useI18n } from 'vue-i18n'
import { Download, BookOpen, Shield, Zap, Monitor } from 'lucide-vue-next'
import { APP_VERSION } from '../config'
import FadeContent from './bits/FadeContent.vue'
import GradientText from './bits/GradientText.vue'
import ShinyText from './bits/ShinyText.vue'
import ElectricBorder from './bits/ElectricBorder.vue'
import BorderGlow from './bits/BorderGlow.vue'

const { t } = useI18n()

const stats = [
  { icon: Shield, valueKey: 'hero.stat1Value', labelKey: 'hero.stat1Label' },
  { icon: Zap, valueKey: 'hero.stat2Value', labelKey: 'hero.stat2Label' },
  { icon: Monitor, valueKey: 'hero.stat3Value', labelKey: 'hero.stat3Label' },
]
</script>

<template>
  <section class="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeContent :threshold="0.15">
          <div class="mb-6">
            <ShinyText
              :text="t('hero.badge', { version: APP_VERSION })"
              class-name="text-sm font-medium"
              color="#6b7280"
              shine-color="#c7d2fe"
              :speed="2.5"
            />
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] tracking-tight mb-6">
            <span class="text-white block">{{ t('hero.title1') }}</span>
            <GradientText
              class-name="!mx-0 !max-w-none !justify-start text-4xl sm:text-5xl lg:text-[3.4rem] font-bold !p-0"
              :colors="['#818cf8', '#a78bfa', '#c4b5fd', '#818cf8']"
              :animation-speed="6"
            >
              {{ t('hero.title2') }}
            </GradientText>
          </h1>

          <p class="text-lg text-[#9ca3af] leading-relaxed mb-10 max-w-xl">
            {{ t('hero.subtitle') }}
          </p>

          <div class="flex flex-wrap gap-3 mb-12">
            <BorderGlow
              :border-radius="14"
              :colors="['#818cf8', '#a78bfa', '#38bdf8']"
              background-color="#0a0c14"
              :animated="true"
              class-name="inline-block"
            >
              <a href="#download" class="btn-primary !rounded-[13px]">
                <Download :size="18" />
                {{ t('hero.ctaDownload') }}
              </a>
            </BorderGlow>
            <a href="#tutorial" class="btn-ghost">
              <BookOpen :size="18" />
              {{ t('hero.ctaTutorial') }}
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="s in stats"
              :key="s.valueKey"
              class="glass-panel rounded-xl p-4 text-center sm:text-left"
            >
              <component :is="s.icon" :size="18" class="text-indigo-400 mb-2 mx-auto sm:mx-0" />
              <div class="text-xl sm:text-2xl font-bold text-white">{{ t(s.valueKey) }}</div>
              <div class="text-xs text-[#6b7280] mt-0.5">{{ t(s.labelKey) }}</div>
            </div>
          </div>
        </FadeContent>

        <FadeContent :threshold="0.15" :delay="150">
          <ElectricBorder
            color="#818cf8"
            :speed="1.3"
            :chaos="0.85"
            :thickness="2"
            :style="{ borderRadius: '24px' }"
          >
            <div class="glass-panel rounded-3xl p-6 sm:p-7">
              <div class="flex items-center gap-3 mb-5 pb-5 border-b border-white/8">
                <img src="/icon.svg" alt="" class="w-11 h-11 rounded-xl shadow-lg shadow-indigo-500/25" />
                <div>
                  <div class="font-semibold">Trae Session</div>
                  <div class="text-xs text-[#6b7280]">3 accounts · 1 active</div>
                </div>
                <div class="ml-auto flex gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div class="space-y-2.5">
                <div class="flex items-center justify-between p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <div>
                    <div class="text-sm font-medium">work@company.com</div>
                    <div class="text-xs text-indigo-300/70 mt-0.5">Pro · 42% used</div>
                  </div>
                  <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-500/25 text-indigo-200 border border-indigo-400/20">当前</span>
                </div>

                <div class="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-colors">
                  <div>
                    <div class="text-sm text-[#d1d5db]">personal@gmail.com</div>
                    <div class="text-xs text-[#6b7280] mt-0.5">Free · 18% used</div>
                  </div>
                  <span class="text-xs text-indigo-400 font-medium">切换 →</span>
                </div>

                <div class="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-colors">
                  <div>
                    <div class="text-sm text-[#d1d5db]">client-project</div>
                    <div class="text-xs text-[#6b7280] mt-0.5">Team · 67% used</div>
                  </div>
                  <span class="text-xs text-indigo-400 font-medium">切换 →</span>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-white/8 flex gap-2 text-xs text-[#6b7280]">
                <span class="px-2 py-1 rounded-md bg-white/5">🔒 本地存储</span>
                <span class="px-2 py-1 rounded-md bg-white/5">📌 系统托盘</span>
              </div>
            </div>
          </ElectricBorder>
        </FadeContent>
      </div>
    </div>
  </section>
</template>
