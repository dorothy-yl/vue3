import { createApp } from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'

const app  =createApp(App)
app.use(router)
app.mount('#app')