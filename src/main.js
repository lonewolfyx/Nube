import './assets/style/tailwind.css'
import './assets/style/reset.css'
import './assets/style/main.scss'

import {createApp} from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import {createPinia} from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css';
import 'virtual:svg-icons-register'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);

app.mount('#app')
