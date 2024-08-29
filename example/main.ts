import { createApp } from 'vue'
import App from './App.vue'
import SXWYH5SDK, { ENV } from '@sxwy/h5-sdk'
import '@sxwy/h5-sdk/styles/index.scss'
// import SXWYH5SDK, { ENV, BASE_API } from '../esm'
// import '../esm/styles/index.css'

const app = createApp(App)

app.use(SXWYH5SDK({ env: ENV.RC, mockerPort: 8090 })).mount('#app')
