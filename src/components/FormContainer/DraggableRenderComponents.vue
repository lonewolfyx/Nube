<template>
    <VueDraggable
        v-model="tools"
        :animation="150"
        group="render_components"
        ghostClass="move"
        class="edit-container-body"
        @update="handleChange"
    >
        <template v-for="(widget,index) in tools" :key="widget.id">
            <div class="widget-items">
                <div
                    class="widget-item-body"
                    tabindex="0"
                    @click="handleClick(widget,index)"
                    @keydown="handleDelete($event, widget,index)"
                    :class="index === selectIndex ? 'active' : ''"
                >
                    <component
                        :is="generateComponentName(widget.type)"
                        :field="widget.config"
                        :rule="widget.rule"
                    />
                    <div class="cover"/>
                </div>
                <template v-if="index === selectIndex">
                    <div class="widget-action-box" :class="index === 0 ? 'once' : '' ">
                        <div class="widget-actin-item">
                            <span class="common"><icon-common class="mr-1"/>{{ widget.label }}</span>
                            <span class="copy" @click="handleCopy(widget,index)"><icon-copy/></span>
                            <span class="delete" @click="handleDelete({key:'Delete'}, widget,index)"><icon-delete/></span>
                        </div>
                    </div>
                </template>
            </div>

        </template>
    </VueDraggable>
</template>

<script setup>
import {VueDraggable} from "vue-draggable-plus";
import {generateComponentName, generateUuid} from "@/util/util.js";
import {useDesignerStore} from "@/stores/designer.js";
import {computed, nextTick, onMounted, ref} from "vue";
import {useDesigner} from "@/hooks/designer.js";
import emitter from "@/util/eventBus.js";
import {cloneDeep, debounce} from "lodash-es";

const designerStore = useDesignerStore()
const selectIndex = computed(() => designerStore.config.selectIndex)
const tools = ref([]);

// 初始化如果 localStorage 中存在上次的数据，则恢复
nextTick(() => {
    tools.value = cloneDeep(useDesigner().getWidgetList() || []);
});

onMounted(() => {
    emitter.on('clear', (e) => {
        tools.value = []
    });

    emitter.on('hasNewWidgetList', () => {
        // console.log('有新数据过来咯')
        tools.value = cloneDeep(useDesigner().getWidgetList());
    });
})

// 拖拽元素改变位置时触发
const handleChange = (e) => {
    // console.log('组件发生顺序变动了', e, tools.value);
    useDesigner().changeSelectWidgetIndex(e.newIndex);
    useDesigner().updateWidgetList(tools.value)
}

// 选中当前组件
const handleClick = (event, index) => {
    // console.log('选中了第', index)
    useDesigner().changeSelectWidgetIndex(index)
}

// 删除当前组件
const handleDelete = (event, item, index) => {
    // console.log(event, item, index, selectIndex.value)
    if (event.key === 'Delete' || event.key === 'Backspace') {
        tools.value = tools.value.filter(i => i.id !== item.id);
        const widgetIndex = selectIndex - 1;
        const currentIndex = isNaN(widgetIndex) || widgetIndex <= 0 ? 0 : widgetIndex;
        useDesigner().changeSelectWidgetIndex(currentIndex)
        useDesigner().updateWidgetList(tools.value)
    }
}

// 复制事件
const handleCopy = async (event, index) => {
    const widgetIndex = index + 1;
    tools.value.splice(widgetIndex, 0, {
        ...event, ...{
            id: generateUuid()
        }
    });
    // console.log('在第几个后添加相同的组件', tools.value, index)
    useDesigner().updateWidgetList(tools.value)
    await nextTick()
    useDesigner().changeSelectWidgetIndex(widgetIndex)
}
// 通知配置面版更新数据，并且更新所选组件
const emitterUpdateWidgetList = debounce(() => {
    // useDesigner().updateWidgetList(tools.value)
    // emitter.emit('hasNewWidgetList', tools.value)
}, 300)
</script>

<style scoped lang="scss">
.edit-container-body {
    @apply relative w-full h-auto min-h-full flex flex-col flex-nowrap bg-slate-200 border rounded border-dotted p-2.5;
}


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