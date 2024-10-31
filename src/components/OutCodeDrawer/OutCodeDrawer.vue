<template>
    <a-drawer
        width="50%"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        unmountOnClose
    >
        <template #title>
            code
        </template>
        <div>code....</div>
    </a-drawer>
</template>

<script setup>
import {ref} from "vue";

const visible = ref(false);

const handleClick = () => {
    visible.value = true;
};
const handleOk = () => {
    visible.value = false;
};
const handleCancel = () => {
    visible.value = false;
}

defineExpose({handleClick})
</script>

<style scoped lang="scss">

</style>