import { createApp } from 'vue'
import App from './App.vue'
import SXWYH5SDK from '../esm'

const app = createApp(App)

app.use(SXWYH5SDK).mount('#app')
