// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './components/App.vue'


// 引入pinia
import {createPinia} from 'pinia'


// 创建一个应用
const app = createApp(App)

// 创建pinia实例
const pinia = createPinia()
// 使用pinia
app.use(pinia)
// 挂载整个应用到app容器中
app.mount('#app')