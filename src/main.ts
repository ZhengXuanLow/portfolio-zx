import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import en from './locales/en.json'
import zh from './locales/zh.json'

// Start in Chinese for Chinese-language browsers, English otherwise.
const prefersZh = navigator.languages?.some((l) => l.toLowerCase().startsWith('zh'))

const i18n = createI18n({
  legacy: false,
  locale: prefersZh ? 'zh' : 'en',
  fallbackLocale: 'en',
  messages: { en, zh },
})

createApp(App).use(i18n).mount('#app')
