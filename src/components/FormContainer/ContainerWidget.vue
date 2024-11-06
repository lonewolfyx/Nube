<template>
    <div class="widget-items">
        <div
            class="widget-item-body"
            tabindex="0"
            @click="handleClick(widget,widgetIndex)"
            @keydown="handleDelete($event, widget)"
            :class="widgetIndex === designer.config.selectIndex ? 'active' : ''"
        >
            <component
                :is="generateComponentName(widget.type)"
                :field="widget.config"
            />
            <div class="cover"/>
        </div>
        <template v-if="widgetIndex === designer.config.selectIndex">
            <div class="widget-action-box" :class="widgetIndex===0?'once':''">
                <div class="widget-actin-item">
                    <span class="common"><icon-common class="mr-1"/>{{ widget.label }}</span>
                    <span class="copy"><icon-copy/></span>
                    <span class="delete" @click="handleDelete({key:'Delete'}, widget)"><icon-delete/></span>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import {generateComponentName} from "@/util/util.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import {useDesignerStore} from "@/stores/designer.js";
import {useDesigner} from "@/hooks/designer.js";

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
    useDesigner().changeSelectWidgetIndex(index)
}

const renderComponent = useRenderComponentStore()
// 删除当前组件
const handleDelete = (event, item) => {
    console.log(event, item, widgetIndex)
    if (event.key === 'Delete' || event.key === 'Backspace') {
        useDesigner().updateWidgetList(renderComponent.components.filter((i) => i.id !== item.id));
        const index = designer.config.selectIndex - 1;
        useDesigner().changeSelectWidgetIndex(index <= 0 ? 0 : index)
    }
}
</script>

<style scoped lang="scss">
.widget-items {
    @apply relative;
    .widget-item-body {
        z-index: 31;
        @apply relative w-full h-auto overflow-hidden border border-dotted border-transparent rounded cursor-grab;

        .cover {
            @apply absolute w-full h-full z-50 top-0 bg-transparent;
        }

        &:hover {
            border-color: rgb(var(--primary-6));
        }

        &.active {
            border-color: rgb(var(--primary-6));
            @apply border-solid;
        }
    }

    .widget-action-box {
        top: -24px;
        z-index: 32;
        @apply absolute left-1.5 text-white cursor-pointer;

        .widget-actin-item {
            @apply flex items-center justify-center;

            > span {
                background: rgb(var(--primary-6));
                padding: 2px 7px;

                @apply flex items-center justify-center text-xs mr-2.5 h-6 rounded-t-md;
            }
        }


        &.once {
            top: auto;
            bottom: -24px;

            .widget-actin-item > span {
                @apply rounded-t-none rounded-b-md;
            }
        }
    }
}
</style>