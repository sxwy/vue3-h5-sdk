import { createApp } from 'vue'
import App from './App.vue'
import SXWYMobileSDK from '@sxwy/mobile-sdk'

const app = createApp(App)

app.use(SXWYMobileSDK).mount('#app')
