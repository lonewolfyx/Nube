<template>
    <div>组件按钮{{ designer.config }}{{ content }}</div>
    <div class="edit-container-wrapper">
        <!--                    @choose="choose"-->
        <div class="tips">请从左侧组件库中挑选所需组件，拖拽至此处进行预览与布局调整</div>
        <VueDraggable
            v-model="tools"
            :animation="150"
            group="render_components"
            ghostClass="move"
            class="edit-container-body"
        >
            <template v-for="item in tools" :key="item.id">
                <p
                    :class="{ 'isChoose': item.isChosen }"
                    @click="selectItem(item)"
                    @keydown="handleDelete($event, item)"
                    tabindex="0"
                >{{ item }}</p>
            </template>
        </VueDraggable>
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {VueDraggable} from "vue-draggable-plus";
import {useDesignerStore} from "@/stores/designer.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";

const renderComponentStore = useRenderComponentStore();
const designer = useDesignerStore()
const content = computed(() => renderComponentStore.components)


const tools = ref(renderComponentStore.components)
watch(tools, (newValue) => {
    renderComponentStore.setData(newValue)
})

const choose = (event) => {
    console.log('选中的', event.item.attributes);
    // const item = Object.values(event.item.attributes).filter(item => item.name === 'config')[0]['value'];
    //
    // console.log(JSON.parse(Object.values(event.item.attributes).filter(item => item.name === 'config')[0]['value']))
}
const move = (event) => {
    console.log('移动', event)
}

const selectItem = (item) => {
    tools.value = tools.value.map((i) => ({
        ...i,
        isChosen: i.id === item.id,
    }));
}
const handleDelete = (event, item) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        tools.value = tools.value.filter((i) => i.id !== item.id);
    }
}

</script>

<style scoped lang="scss">
.edit-container-wrapper {
    @apply relative w-full h-full overflow-hidden z-10;

    &.is-mobile {
        width: 500px;
        @apply m-auto;
    }

    .tips {
        @apply absolute flex items-center justify-center w-full h-full text-base text-gray-400 z-20;
    }

    .edit-container-body {
        @apply relative w-full h-full flex flex-col flex-nowrap bg-slate-200 border rounded border-dotted p-2.5 overflow-y-scroll z-30;
    }

}

.move {
    display: none;
}
</style>