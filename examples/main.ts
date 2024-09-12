import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import SXWYH5SDK, { ENV } from '@sxwy/h5-sdk'
import '@sxwy/h5-sdk/styles/index.scss'
// import SXWYH5SDK, { ENV, BASE_API } from '../esm'
// import '../esm/styles/index.css'

const pinia = createPinia()

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .use(
    SXWYH5SDK({
      env: ENV.PROD,
      mockerPort: 8090
    })
  )
  .mount('#app')
