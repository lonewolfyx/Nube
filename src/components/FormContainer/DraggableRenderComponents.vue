<template>
    <VueDraggable
        v-model="tools"
        :animation="150"
        group="render_components"
        ghostClass="move"
        class="edit-container-body"
    >
        <template v-for="item in tools" :key="item.id">
            <!--                <component :is="" />-->
            <!--                {{item}}-->
            <!--                <p-->
            <!--                    :class="{ 'isChoose': item.isChoose }"-->
            <!--                    @click="selectItem(item)"-->
            <!--                    @keydown="handleDelete($event, item)"-->
            <!--                    tabindex="0"-->
            <!--                >{{ item }}</p>-->

            <div
                :class="{ 'isChoose': item.isChoose }"
                @click="selectItem(item)"
                @keydown="handleDelete($event, item)"
            >
                {{generateComponentName(item.type)}}
                <component
                    :is="generateComponentName(item.type)"
                />
            </div>
        </template>
    </VueDraggable>
</template>

<script setup>
import {VueDraggable} from "vue-draggable-plus";
import {ref, watch} from "vue";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import {generateComponentName} from "@/util/util.js";

const renderComponentStore = useRenderComponentStore();

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
        isChoose: i.id === item.id,
    }));
}
const handleDelete = (event, item) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        tools.value = tools.value.filter((i) => i.id !== item.id);
    }
}

</script>

<style scoped lang="scss">
.edit-container-body {
    @apply relative w-full h-full flex flex-col flex-nowrap bg-slate-200 border rounded border-dotted p-2.5 overflow-y-scroll z-30;
}
</style>