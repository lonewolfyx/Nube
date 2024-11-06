<template>
    <div class="p-2">
        <VueDraggable
            v-model="formWidget"
            :animation="150"
            ghostClass="ghost"
            :group="{ name: 'render_components', pull: 'clone', put: false }"
            :clone="cloneHandle"
            :sort="false"
            class="grid grid-cols-2 gap-2.5"
            @end="onDragEnd"
        >
            <div class="draggable-item" v-for="(item,index) in formWidget" :key="index">
                <span class="icon">
                    <SvgIcon :name="item.icon" :className="item.className"/>
                </span>
                <span class="name">{{ item.label }}</span>
            </div>
        </VueDraggable>
    </div>
</template>

<script setup>

import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import {VueDraggable} from "vue-draggable-plus";
import {markRaw} from "vue";
import {generateUuid} from "@/util/util.js";
import formWidget from "@/components/FormWidget/FormWidget.js";
import {useDesigner} from "@/hooks/designer.js";

// 组件拖拽克隆事件
const cloneHandle = (element) => {
    const id = generateUuid();
    // draggableToolBar.setToolBarList(markRaw({
    //     id,
    //     label: `${element.label}-clone-${id}`,
    //     icon: `${element.icon}-clone-${id}`,
    //     className: `${element.icon}-clone-${id}`,
    // }));
    // console.log(element)

    return markRaw({
        ...element,
        ...{
            id,
            label: `${element.label}`,
        }
    })
}

// 组件拖拽结束
const onDragEnd = (event) => {
    useDesigner().changeSelectWidgetIndex(event.newIndex)
    // renderComponentStore.setData(event.clonedData)
    console.log('onDragEnd', event)
}
</script>

<style scoped lang="scss">
.draggable-item {
    @apply border rounded border-solid border-slate-300  flex items-center justify-start flex-row text-slate-500 p-2 mb-3 cursor-grab;

    .icon {
        @apply flex items-center text-slate-500 mr-1.5;
    }

    .name {
        @apply text-xs;
    }
}
</style>