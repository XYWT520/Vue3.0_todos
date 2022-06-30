import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
// 1. 按需导入要用到的路由方法
import { createRouter,createMemoryHistory } from 'vue-router'
import { createStore } from 'vuex'

// 2. 创建 pinia 对象
const pinia = createPinia()

// 2. 创建 store 对象
const store = createStore({
    state:{
        name:'冷雪瞳,舒月舞',
        age:18
    }
})

// 2. 配置路由表
const routes = [
    { path: '/login', component: () => import('./components/login.vue') },
    { path: '/home', component: () => import('./components/login.vue') }
]

// 3. 创建路由对象
const router = createRouter({
    routes,
    history:createMemoryHistory()
})

createApp(App).use(router).use(store).use(pinia).mount('#app')

// 1. 导入 import
// 2. 创建 const xxx = xxx()
// 3. 挂载 .use(xxx)

