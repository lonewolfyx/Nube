<template>
    <a-form-item label="输入框占位文本">
        <a-input v-model="options.placeholder"/>
    </a-form-item>
</template>

<script setup>
const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>