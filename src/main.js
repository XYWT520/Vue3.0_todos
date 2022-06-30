import { createApp } from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'


// 引入 pinia 
import { createPinia } from 'pinia'
// 创建 pinia
const pinia = createPinia()
// 挂载 pinia
createApp(App).use(pinia).mount('#app')