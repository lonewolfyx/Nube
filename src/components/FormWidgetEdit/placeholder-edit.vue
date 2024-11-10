<template>
    <a-form-item label="输入框占位文本">
        <a-input v-model="options.placeholder"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'placeholder-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>