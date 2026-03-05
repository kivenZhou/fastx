<template>
  <div class="bg-slate-50 pb-32">
    <section class="relative py-36 overflow-hidden bg-white">
      <div class="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
           style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center reveal">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold mb-10 border border-blue-100 uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
          {{ $t('contact.badge') }}
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05]">
          {{ $t('contact.title1') }}<span class="gradient-text">{{ $t('contact.title_gradient') }}</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          {{ $t('contact.desc') }}
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 max-w-6xl mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        <!-- Info -->
        <div class="lg:col-span-5 flex flex-col justify-between reveal-left">
          <div>
            <h3 class="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{{ $t('contact.info_title') }}</h3>
            <p class="text-slate-500 leading-relaxed mb-12 max-w-sm">{{ $t('contact.info_desc') }}</p>

            <div class="space-y-8">
              <div v-for="(contact, i) in $tm('contact.contacts')" :key="i" class="flex items-start gap-5 group">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-100 transition-all duration-400 shrink-0">
                  <component :is="contactIcons[i]" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-bold text-base text-slate-900">{{ rt(contact.label) }}</h4>
                  <p class="text-slate-500 mt-1 leading-relaxed text-sm">{{ rt(contact.value) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden group">
            <div class="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500"></div>
            <h4 class="font-bold text-blue-900 mb-2 relative z-10">{{ $t('contact.enterprise_title') }}</h4>
            <p class="text-blue-700 font-medium relative z-10 text-sm leading-relaxed">{{ $t('contact.enterprise_desc') }}</p>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-7 reveal-right delay-100">
          <div class="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-[80px] pointer-events-none opacity-70"></div>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative z-10" @submit.prevent>
              <!-- Disabled Notice -->
              <div class="md:col-span-2 bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl flex items-start gap-4 mb-2">
                <svg class="w-6 h-6 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 class="font-bold">{{ $t('contact.form_disabled_title') }}</h4>
                  <p class="text-sm mt-1 opacity-90">{{ $t('contact.form_disabled_desc') }}</p>
                </div>
              </div>

              <div class="space-y-2 opacity-60">
                <label class="text-sm font-semibold text-slate-700 block">{{ $t('contact.form_name') }}</label>
                <input type="text" :placeholder="$t('contact.form_name_placeholder')" disabled
                  class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed">
              </div>

              <div class="space-y-2 opacity-60">
                <label class="text-sm font-semibold text-slate-700 block">{{ $t('contact.form_company') }}</label>
                <input type="text" :placeholder="$t('contact.form_company_placeholder')" disabled
                  class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed">
              </div>

              <div class="md:col-span-2 space-y-2 opacity-60">
                <label class="text-sm font-semibold text-slate-700 block">{{ $t('contact.form_contact') }}</label>
                <input type="text" :placeholder="$t('contact.form_contact_placeholder')" disabled
                  class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed">
              </div>

              <div class="md:col-span-2 space-y-2 opacity-60">
                <label class="text-sm font-semibold text-slate-700 block">{{ $t('contact.form_service') }}</label>
                <div class="relative">
                  <select disabled class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 appearance-none text-slate-500 font-medium cursor-not-allowed">
                    <option v-for="(opt, i) in $tm('contact.form_services_options')" :key="i">{{ rt(opt) }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 space-y-2 opacity-60">
                <label class="text-sm font-semibold text-slate-700 block">{{ $t('contact.form_project') }}</label>
                <textarea rows="4" :placeholder="$t('contact.form_project_placeholder')" disabled
                  class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed resize-none"></textarea>
              </div>

              <div class="md:col-span-2 mt-2">
                <button type="button" disabled
                  class="w-full bg-slate-300 text-slate-500 py-4 px-8 rounded-xl font-bold cursor-not-allowed text-lg">
                  {{ $t('contact.form_submit') }}
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                  {{ $t('contact.form_privacy') }}<a href="#" class="text-accent hover:underline">{{ $t('contact.form_privacy_link') }}</a>{{ $t('contact.form_privacy_end') }}
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail, Phone, User } from 'lucide-vue-next'

const { rt, tm } = useI18n()

const contactIcons = [User, Mail]

onMounted(() => {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})
</script>
