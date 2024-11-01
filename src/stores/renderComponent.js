import {defineStore} from "pinia";
import {ref} from "vue";

// 组件拖拽存储
export const useRenderComponentStore = defineStore('RenderComponent', () => {
    const components = ref([]); // 使用 ref 创建响应式数据

    const setData = (newComponent) => {
        components.value = newComponent;
    }

    // 在创建 store 时加载数据
    // loadFromLocalStorage();

    return {components, setData};


}, {
    persist: true
})