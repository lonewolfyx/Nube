import {defineStore} from "pinia";
import {ref} from "vue";

export const useDraggableToolBar = defineStore('draggableToolBar', () => {
    const toolBarList = ref([]);

    const setToolBarList = (data) => {
        toolBarList.value.push(data)
    }
    return {toolBarList, setToolBarList}
})