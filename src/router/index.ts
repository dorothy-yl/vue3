

import {createRouter, createWebHistory,createWebHashHistory,} from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    path:'detail/:id/:title/:content',
                    component:Detail
                }
            ]
        }
    ]
})
// 
export default router