import { createApp } from 'vue'
import '@/assets/main.css'
import App from '@/App.vue'
import router from '@/router'
// 导入全局路由守卫
import '@/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css'
import 'nprogress/nprogress.css'
// 引入全局状态管理 Pinia
import pinia from '@/stores'
// 图片点击放大
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app = createApp(App)

// 应用路由
app.use(router)
// 应用 Pinia
app.use(pinia)

app.use(VueViewer)

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}