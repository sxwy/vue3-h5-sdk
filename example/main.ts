import { createApp } from 'vue'
import App from './App.vue'
// import SXWYH5SDK from '@sxwy/h5-sdk'
import SXWYH5SDK from '../esm'
import '../esm/styles/index.css'

const app = createApp(App)

app.use(SXWYH5SDK).mount('#app')
