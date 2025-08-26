import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 创建应用
const app = createApp(App)

// 使用路由
app.use(router)

app.config.globalProperties.x = 99

declare module 'vue' {
  interface ComponentCustomProperties {
    x:number
  }
}

app.directive('beauty',(element,{value})=>{
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')