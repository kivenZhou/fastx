<script setup>
import { useI18n } from 'vue-i18n'
import FadeContent from './bits/FadeContent.vue'
import BorderGlow from './bits/BorderGlow.vue'
import ShinyText from './bits/ShinyText.vue'

const { t, tm } = useI18n()
const items = tm('disclaimer.items')
</script>

<template>
  <section class="py-16 sm:py-20 relative">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <FadeContent :threshold="0.2">
        <BorderGlow
          :border-radius="20"
          :colors="['#fbbf24', '#f59e0b', '#fb923c']"
          background-color="#0a0c14"
          :animated="true"
          class-name="w-full"
        >
          <div class="p-8 sm:p-10 text-center">
            <ShinyText
              :text="t('disclaimer.title')"
              class-name="text-xl font-bold mb-6 block"
              color="#fbbf24"
              shine-color="#fef3c7"
              :speed="3"
            />
            <ul class="text-left space-y-3 mb-6 max-w-lg mx-auto">
              <li
                v-for="(item, i) in items"
                :key="i"
                class="flex gap-2.5 text-sm text-[#c7cad4]"
              >
                <span class="text-amber-400 shrink-0">•</span>
                {{ item }}
              </li>
            </ul>
            <p class="text-xs text-[#6b7280]">{{ t('disclaimer.accept') }}</p>
          </div>
        </BorderGlow>
      </FadeContent>
    </div>
  </section>
</template>
