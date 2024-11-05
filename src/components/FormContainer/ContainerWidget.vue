<template>
    <div
        class="widget-items"
        tabindex="0"
        @click="handleClick(widget,widgetIndex)"
        @keydown="handleDelete($event, widget)"
    >
        <component
            :is="generateComponentName(widget.type)"
            class="nnnnnn"
        />
        <div class="cover"/>
    </div>
</template>

<script setup>
import {generateComponentName} from "@/util/util.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import {useDesignerStore} from "@/stores/designer.js";

const {widget, widgetIndex} = defineProps(['widget', 'widgetIndex']);

const designer = useDesignerStore()
// const selectItem = (item) => {
//     tools.value = tools.value.map((i) => ({
//         ...i,
//         isChoose: i.id === item.id,
//     }));
// }

// 选中当前组件
const handleClick = (event, index) => {
    console.log(event, index);
    designer.setSelectWidgetIndex(index)
}

const renderComponent = useRenderComponentStore()
// 删除当前组件
const handleDelete = (event, item) => {
    // console.log(event, item)
    if (event.key === 'Delete' || event.key === 'Backspace') {
        renderComponent.setData(renderComponent.components.filter((i) => i.id !== item.id));
        const index = designer.config.selectIndex - 1;
        designer.setSelectWidgetIndex(index <= 0 ? renderComponent.components.length : index)
    }
}
</script>

<style scoped lang="scss">
.widget-items {

    @apply relative w-full h-auto overflow-hidden border border-dotted border-transparent rounded cursor-grab;

    .cover {
        @apply absolute w-full h-full z-50 top-0 bg-transparent;
    }

    &:hover {
        border-color: rgb(var(--primary-6));
    }
}
</style>