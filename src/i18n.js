import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('trae-session-lang') : null

export const i18n = createI18n({
  legacy: false,
  locale: saved || 'zh',
  fallbackLocale: 'en',
  messages: { zh, en },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('trae-session-lang', locale)
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}
