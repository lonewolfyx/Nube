<template>
    <a-form-item label="标签文本">
        <a-input v-model="options.label"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'label-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>