import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import * as echarts from 'echarts/core'

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$echarts = echarts;