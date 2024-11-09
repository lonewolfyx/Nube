import {defineStore} from "pinia";
import {useDesignerStore} from "@/stores/designer.js";
import emitter from "@/util/eventBus.js";

export const useRenderComponentStore = defineStore('RenderComponent', {
    state: () => ({
        components: [],

    }),
    actions: {
        addData(components, index) {
            this.components.splice(index, 0, components)
        },
        updateData(components, index) {
            if (components) {
                if (index || index === 0) {
                    // console.log('更新咯', components);
                    this.components[index] = components;
                } else {
                    this.components = [...components]
                }
            }
        },
        clear() {
            this.components = [];
            // console.log('更新数据值')
            useDesignerStore().setSelectWidgetIndex(0, false);
            emitter.emit('clear', {clear: true});
        }
    },
    subscribe: (store, afterChange, beforeChange) => {
        if (afterChange.components) {
            // console.log('编辑后新的数据值：', afterChange.components);
        }
    },
    persist: true
})