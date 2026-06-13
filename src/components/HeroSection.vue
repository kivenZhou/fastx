<script setup>
import { useI18n } from 'vue-i18n'
import { Download, BookOpen, Shield, Zap, Monitor, Star, Github } from 'lucide-vue-next'
import { APP_VERSION, githubRepoUrl } from '../config'
import { brandIconPng } from '../brand.js'
import FadeContent from './bits/FadeContent.vue'
import GradientText from './bits/GradientText.vue'
import ShinyText from './bits/ShinyText.vue'
import BorderGlow from './bits/BorderGlow.vue'

const { t } = useI18n()
const sourceUrl = githubRepoUrl()

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
          <div class="mb-6 flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/15 text-emerald-200 border border-emerald-400/25">
              {{ t('hero.officialBadge') }}
            </span>
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

          <div class="flex flex-wrap gap-3 mb-4">
            <BorderGlow
              :border-radius="14"
              :colors="['#818cf8', '#a78bfa', '#38bdf8']"
              background-color="#0a0c14"
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
            <a
              :href="sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost hover:!border-amber-400/35 hover:!bg-amber-500/10"
            >
              <Github :size="18" />
              <Star :size="16" class="text-amber-300" />
              {{ t('hero.ctaStar') }}
            </a>
          </div>

          <p class="text-sm text-[#6b7280] mb-12 flex items-center gap-2">
            <Github :size="14" class="shrink-0 text-indigo-400" />
            {{ t('hero.openSource') }}
          </p>

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
          <div class="hero-preview">
            <div class="hero-preview__glow" aria-hidden="true" />
            <div class="hero-preview__frame">
              <div class="hero-preview__border" aria-hidden="true" />
              <div class="hero-preview__inner">
                <div class="flex items-center gap-3 mb-5 pb-5 border-b border-white/[0.06]">
                  <img :src="brandIconPng" alt="" class="w-11 h-11 rounded-xl shadow-lg shadow-indigo-500/30" />
                  <div>
                    <div class="font-semibold text-white">TraeHop</div>
                    <div class="text-xs text-[#6b7280]">3 accounts · 1 active</div>
                  </div>
                  <div class="ml-auto flex gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                </div>

                <div class="space-y-2.5">
                  <div class="hero-preview__row hero-preview__row--active">
                    <div>
                      <div class="text-sm font-medium text-white">work@company.com</div>
                      <div class="text-xs text-indigo-300/80 mt-0.5">Pro · 42% used</div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-100 border border-indigo-400/25 font-medium">当前</span>
                  </div>

                  <div class="hero-preview__row">
                    <div>
                      <div class="text-sm text-[#d1d5db]">personal@gmail.com</div>
                      <div class="text-xs text-[#6b7280] mt-0.5">Free · 18% used</div>
                    </div>
                    <span class="text-xs text-indigo-400 font-medium">切换 →</span>
                  </div>

                  <div class="hero-preview__row">
                    <div>
                      <div class="text-sm text-[#d1d5db]">client-project</div>
                      <div class="text-xs text-[#6b7280] mt-0.5">Team · 67% used</div>
                    </div>
                    <span class="text-xs text-indigo-400 font-medium">切换 →</span>
                  </div>
                </div>

                <div class="mt-5 pt-4 border-t border-white/[0.06] flex gap-2 text-xs text-[#6b7280]">
                  <span class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">🔒 本地存储</span>
                  <span class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">📌 系统托盘</span>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  </section>
</template>
