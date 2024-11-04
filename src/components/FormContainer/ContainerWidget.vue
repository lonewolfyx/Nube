<template>
    <component
        :is="generateComponentName(widget.type)"
        class="nnnnnn"
        @click="handleClick"
        @keydown="handleDelete($event, widget)"
    />
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

</style>