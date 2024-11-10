<template>
    <a-form-item label="显示切换图标">
        <a-switch type="round" v-model="options.showPassword"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'showPassword-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>