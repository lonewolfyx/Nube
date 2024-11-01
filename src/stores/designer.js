import {defineStore} from "pinia";
import {ref} from "vue";

// 框架设计配置
export const useDesignerStore = defineStore('designer', () => {
    const config = ref({
        // 框架
        framework: 'vue',
        // ui组件库
        ui: 'element',
        // 设备，pc - web端，mobile - 移动端
        device: 'pc'
    });

    const setConfig = (data) => {
        config.value = data
    }

    return {config, setConfig}
}, {
    persist: true
})

