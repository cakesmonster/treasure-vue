import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app');
