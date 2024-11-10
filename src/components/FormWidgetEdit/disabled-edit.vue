<template>
    <a-form-item label="是否禁用">
        <a-switch type="round" v-model="options.disabled"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'disable-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>