<template>
    <a-form-item label="属性值" required>
        <a-input v-model="options.prop"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'prop-edit'
});

const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>