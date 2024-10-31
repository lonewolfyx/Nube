<template>
    <div class="edit-container-wrapper">
        <!--                    @choose="choose"-->
        <VueDraggable
            v-model="list2"
            :animation="150"
            group="people"
            ghostClass="move"
            class="edit-container-body"
        >
            <p>内容拖拽区域组件渲染预览</p>
            <template v-for="item in list2" :key="item.id">
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
import {ref} from "vue";
import {VueDraggable} from "vue-draggable-plus";

const list2 = ref([])

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
    list2.value = list2.value.map((i) => ({
        ...i,
        isChosen: i.id === item.id,
    }));
}
const handleDelete = (event, item) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        list2.value = list2.value.filter((i) => i.id !== item.id);
    }
}
</script>

<style scoped lang="scss">
.edit-container-wrapper {
    @apply relative w-full h-full;

    &.is-mobile {
        width: 500px;
        @apply m-auto;
    }

    .edit-container-body {
        @apply relative w-full h-full flex flex-col flex-nowrap bg-slate-200 border rounded border-dotted p-2.5 overflow-y-scroll;
    }
}

.move {
    display: none;
}
</style>