<template>
    <a-form-item label="最大长度">
        <a-input-number v-model="options.maxlength" :min="0"/>
    </a-form-item>
</template>

<script setup>
const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>