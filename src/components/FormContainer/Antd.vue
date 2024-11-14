<template>
    <antd-form
        :model="{}"
        class="h-full bg-white"
        labelAlign="left"
    >
        <DraggableRenderComponents/>
    </antd-form>
</template>

<script setup>
import DraggableRenderComponents from "@/components/FormContainer/DraggableRenderComponents.vue";
import {reactive} from "vue";

defineOptions({
    name: 'antd-container'
});

const form = reactive({
    name: '',
});
</script>

<style scoped lang="scss">

</style>