<template>
    <antd-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
    >
        <antd-input v-model:value="field.value" />
    </antd-form-item>
</template>

<script setup>
const {field, rule} = defineProps(['field', 'rule']);

</script>

<style scoped lang="scss">

</style>