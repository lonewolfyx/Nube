import {useDesignerStore} from "@/stores/designer.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import {debounce} from "@arco-design/web-vue/es/_utils/debounce.js";

const designerStore = useDesignerStore();
const renderComponentStore = useRenderComponentStore();
// 更新拖拽后选中的组件
const changeSelectWidgetIndex = (index) => {
    designerStore.setSelectWidgetIndex(index);
}

// 更新组件列表 · 配合防抖使用
const updateWidgetList = (widgetList) => {
    debounce(renderComponentStore.setData(widgetList), 1000);
}

// 清空组件列表
const clearWidgetList = () => {
    renderComponentStore.setData([]);
}

export const useDesigner = () => {
    return {
        changeSelectWidgetIndex,
        updateWidgetList,
        clearWidgetList
    }
}