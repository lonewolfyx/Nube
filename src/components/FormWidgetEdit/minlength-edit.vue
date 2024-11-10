<template>
    <a-form-item label="最小长度">
        <a-input-number v-model="options.minlength" :min="0"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'minlength-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>