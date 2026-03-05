import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('fastx-locale') || 'zh'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'zh',
  messages: { zh, en }
})

export function setLocale(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('fastx-locale', lang)
  document.documentElement.lang = lang
}
