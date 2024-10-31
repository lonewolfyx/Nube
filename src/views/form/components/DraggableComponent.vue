<template>
    <div class="p-2">
        <VueDraggable
            v-model="tools"
            :animation="150"
            ghostClass="ghost"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneHandle"
            :sort="false"
            class="grid grid-cols-2 gap-2.5"
        >
            <div class="" v-for="(item,index) in tools" :key="index">
                <div class="draggable-item">
                                <span class="icon">
                                    <SvgIcon :name="item.icon" :className="item.className"/>
                                </span>
                    <span class="name">{{ item.label }}</span>
                </div>
            </div>
        </VueDraggable>
    </div>
</template>

<script setup>

import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import {VueDraggable} from "vue-draggable-plus";
import {useDraggableToolBar} from "@/stores/draggableToolBar.js";
import {computed, markRaw} from "vue";
import {generateUuid} from "@/util/util.js";

const tools = [
    {id: generateUuid(), label: '输入框', icon: 'input', className: 'w-5 h-5'},
    {id: generateUuid(), label: '多行输入框', icon: 'multi-line', className: 'w-5 h-5'},

    {id: generateUuid(), label: '单选框', icon: 'radio', className: 'w-5 h-5'},
    {id: generateUuid(), label: '多选框', icon: 'checkbox', className: 'w-5 h-5'},

    {id: generateUuid(), label: '评分', icon: 'rate', className: 'w-5 h-5'},
    {id: generateUuid(), label: '下拉选择器', icon: 'select', className: 'w-5 h-5'},

    {id: generateUuid(), label: '滑块', icon: 'slider', className: 'w-5 h-5'},
    {id: generateUuid(), label: '开关', icon: 'switch', className: 'w-5 h-5'},

    {id: generateUuid(), label: '日期选择器', icon: 'date-picker', className: 'w-5 h-5'},
    {id: generateUuid(), label: '时间选择器', icon: 'time-picker', className: 'w-5 h-5'},

    {id: generateUuid(), label: '数字输入框', icon: 'number-input', className: 'w-5 h-5'},
    {id: generateUuid(), label: '取色器', icon: 'color', className: 'w-5 h-5'},
    {id: generateUuid(), label: '上传', icon: 'upload', className: 'w-5 h-5'},
    {id: generateUuid(), label: '穿梭框', icon: 'transfer', className: 'w-5 h-5'},
    {id: generateUuid(), label: '头像', icon: 'avatar', className: 'w-5 h-5'},
    {id: generateUuid(), label: '日历', icon: 'calendar', className: 'w-5 h-5'},
    {id: generateUuid(), label: '图片', icon: 'image', className: 'w-5 h-5'},
    {id: generateUuid(), label: '标签', icon: 'tag', className: 'w-5 h-5'},
    {id: generateUuid(), label: '分割线', icon: 'divider', className: 'w-5 h-5'},
]

const draggableToolBar = useDraggableToolBar()
const toolBarList = computed(() => draggableToolBar.toolBarList)
const cloneHandle = (element) => {
    const id = generateUuid();
    // draggableToolBar.setToolBarList(markRaw({
    //     id,
    //     label: `${element.label}-clone-${id}`,
    //     icon: `${element.icon}-clone-${id}`,
    //     className: `${element.icon}-clone-${id}`,
    // }));
    console.log(element, JSON.stringify(toolBarList.value))

    return markRaw({
        id,
        label: `${element.label}-clone-${id}`,
        icon: `${element.icon}-clone-${id}`,
        className: `${element.icon}-clone-${id}`,
    })
}

// // 拖拽结束
// const onDragEnd = (event) => {
//     console.log('onDragEnd', event.data)
// }
</script>

<style scoped lang="scss">
.draggable-item {
    @apply border rounded border-solid border-slate-300  flex items-center justify-start flex-row text-slate-500 p-2 mb-3;

    .icon {
        @apply flex items-center text-slate-500 mr-1.5;
    }

    .name {
        @apply text-xs;
    }
}
</style>