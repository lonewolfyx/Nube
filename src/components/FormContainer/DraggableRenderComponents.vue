<template>
    <VueDraggable
        v-model="tools"
        :animation="150"
        group="render_components"
        ghostClass="move"
        class="edit-container-body"
    >
        <template v-for="(widget,index) in tools" :key="widget.id">
            <ContainerWidget
                :widget="widget"
                :widgetIndex="index"
            />
        </template>
    </VueDraggable>
</template>

<script setup>
import {VueDraggable} from "vue-draggable-plus";
import {ref, watch} from "vue";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import ContainerWidget from "@/components/FormContainer/ContainerWidget.vue";
import {useDesigner} from "@/hooks/designer.js";

const renderComponentStore = useRenderComponentStore();

const tools = ref(renderComponentStore.components)
// const tools = computed(() => renderComponentStore.components);
watch(() => renderComponentStore.components, (newComponents) => {
    tools.value = newComponents;
}, {deep: true});

watch(tools, (newValue, oldValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        useDesigner().updateWidgetList(newValue);
    }
}, {deep: true});


const choose = (event) => {
    console.log('选中的', event.item.attributes);
    // const item = Object.values(event.item.attributes).filter(item => item.name === 'config')[0]['value'];
    //
    // console.log(JSON.parse(Object.values(event.item.attributes).filter(item => item.name === 'config')[0]['value']))
}
const move = (event) => {
    console.log('移动', event)
}

</script>

<style scoped lang="scss">
.edit-container-body {
    @apply relative w-full h-auto min-h-full flex flex-col flex-nowrap bg-slate-200 border rounded border-dotted p-2.5 z-30;
}
</style>