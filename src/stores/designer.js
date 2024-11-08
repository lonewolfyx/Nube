import {defineStore} from "pinia";
import {ref} from "vue";
import emitter from "@/util/eventBus.js";

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
        selectIndex: -1
    });

    const setConfig = (data) => {
        config.value = data
    }

    // 更新选中预览的组件序号
    const setSelectWidgetIndex = (index, emit = true) => {
        config.value.selectIndex = index;
        if (emit) {
            // console.log('通知更新选中的数值')
            emitter.emit('selectIndex', index)
        }
    }


    return {config, setConfig, setSelectWidgetIndex}
}, {
    persist: true
})

