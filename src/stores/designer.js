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
        device: 'pc',
        // 当前预览组件选中的序号
        selectIndex: 0
    });

    const setConfig = (data) => {
        config.value = data
    }

    // 更新选中预览的组件序号
    const setSelectWidgetIndex = (index) => {
        config.value.selectIndex = index
    }


    return {config, setConfig, setSelectWidgetIndex}
}, {
    persist: true
})

