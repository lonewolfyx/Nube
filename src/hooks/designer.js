import {useDesignerStore} from "@/stores/designer.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
// import {debounce} from "@arco-design/web-vue/es/_utils/debounce.js";

const designerStore = useDesignerStore();
const renderComponentStore = useRenderComponentStore();
// 更新拖拽后选中的组件
const changeSelectWidgetIndex = (index) => {
    designerStore.setSelectWidgetIndex(index);
}

// 添加新的组件
const addWidget = (widget, index) => {
    renderComponentStore.addData(widget, index)
    // await nextTick()
    // emitter.emit('hasNewWidgetList', {});
    // debounce(renderComponentStore.addData(widget), 1000)
}
// 更新组件列表 · 配合防抖使用
const updateWidgetList = (widgetList) => {
    // console.log(widgetList)
    renderComponentStore.updateData(widgetList, false);
}

// 清空组件列表
const clearWidgetList = () => {
    renderComponentStore.clear();
}

// 获取组件列表
const getWidgetList = () => {
    return renderComponentStore.components;
}

// 指定节点更新选中的组件信息
const updateWidgetAtIndex = (widget, index) => {
    // console.log(widget)
    renderComponentStore.updateData(widget, index)
}
export const useDesigner = () => {
    return {
        changeSelectWidgetIndex,
        updateWidgetList,
        clearWidgetList,
        addWidget,
        getWidgetList,
        updateWidgetAtIndex
    }
}