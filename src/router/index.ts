

import { createRouter, createWebHistory, createWebHashHistory, } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail/:id/:title/:content',
                    component: Detail,

                    // 第一种写法，将路由收到的所有params参数作为props传给路由组件
                    props:true

                    // // 第二种写法，函数写法，可以自己决定将什么作为props给路由器
                    // props(route){
                    //     return route.query
                    // }


                    // // // 第三种写法，对象写法，可以自己决定将什么作为props给路由器
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        }
    ]
})
// 
export default router