<template>
    <a-form-item label="最小长度">
        <a-input-number v-model="options.minlength" :min="0"/>
    </a-form-item>
</template>

<script setup>
const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>