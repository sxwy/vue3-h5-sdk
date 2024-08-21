import { createApp } from 'vue'
import App from './App.vue'
import SXWYH5SDK from '@sxwy/h5-sdk'

const app = createApp(App)

app.use(SXWYH5SDK).mount('#app')
