<template>
    <a-form-item label="默认值">
        <a-input v-model="options.value"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'value-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>