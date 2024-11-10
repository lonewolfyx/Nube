<template>
    <a-form
        :model="form"
        class="h-full bg-white"
        auto-label-width
    >
        <DraggableRenderComponents/>
    </a-form>

</template>

<script setup>
import {reactive} from "vue";
import DraggableRenderComponents from "@/components/FormContainer/DraggableRenderComponents.vue";

defineOptions({
    name: 'arco'
})

const form = reactive({
    name: '',
    post: '',
    isRead: '',
});
const handleSubmit = (data) => {
    console.log(data);
};
</script>

<style scoped lang="scss">
</style>