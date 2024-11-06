import './assets/style/tailwind.css'
import './assets/style/reset.css'
import './assets/style/main.scss'

import {createApp} from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ElementPlus from 'element-plus'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import {createPinia} from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css';
import 'virtual:svg-icons-register'
import FormWidgetItem from "@/components/FormWidget/FormWidgetItem.js";
import AntdFormWidgetItem from "@/components/FormWidget/AntdFormWidgetItem.js";


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);

app.use(ElementPlus);

app.use(FormWidgetItem);
// 注册antd组件
app.use(AntdFormWidgetItem);

app.mount('#app')
