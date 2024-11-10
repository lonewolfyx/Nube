<template>
    <a-form-item label="显示清除按钮">
        <a-switch type="round" v-model="options.clearable"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'clearable-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>