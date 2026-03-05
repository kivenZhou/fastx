/**
 * 
 *  ███████╗ █████╗ ███████╗████████╗██╗  ██╗
 *  ██╔════╝██╔══██╗██╔════╝╚══██╔══╝╚██╗██╔╝
 *  █████╗  ███████║███████╗   ██║    ╚███╔╝ 
 *  ██╔══╝  ██╔══██║╚════██║   ██║    ██╔██╗ 
 *  ██║     ██║  ██║███████║   ██║   ██╔╝ ██╗
 *  ╚═╝     ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
 *  
 *  FASTX.INK - BUILD WITH SPEED, DEFINE THE INFINITE.
 */

import { createApp } from 'vue'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/jetbrains-mono/500.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

createApp(App).use(router).use(i18n).mount('#app')
