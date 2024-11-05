<template>
    <div
        class="widget-items"
    >
        <component
            :is="generateComponentName(widget.type)"
            class="nnnnnn"
            @click="handleClick"
            @keydown="handleDelete($event, widget)"
        />
        <div class="cover"></div>
    </div>
</template>

<script setup>
import {generateComponentName} from "@/util/util.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";

const {widget} = defineProps(['widget']);

// const selectItem = (item) => {
//     tools.value = tools.value.map((i) => ({
//         ...i,
//         isChoose: i.id === item.id,
//     }));
// }

// 选中当前组件
const handleClick = (event) => {
    console.log(event.target.parent)
}

const renderComponent = useRenderComponentStore()
// 删除当前组件
const handleDelete = (event, item) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        renderComponent.setData(renderComponent.components.filter((i) => i.id !== item.id));
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