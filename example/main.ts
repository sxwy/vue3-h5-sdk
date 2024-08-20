import { createApp } from 'vue'
import App from './App.vue'
import SXWYSDK from '../src/index'

const app = createApp(App)

app.use(SXWYSDK).mount('#app')
