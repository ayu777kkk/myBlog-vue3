import { createApp } from 'vue'
import '@/assets/main.css'
import App from '@/App.vue'
import router from '@/router'
// 导入全局路由守卫
import '@/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css'
import 'nprogress/nprogress.css'

const app = createApp(App)

// 应用路由
app.use(router)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}