import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局注册
import CloudComponents from '../../packages/index.js'

const app = createApp(App)
app.use(CloudComponents)
app.mount('#app')
