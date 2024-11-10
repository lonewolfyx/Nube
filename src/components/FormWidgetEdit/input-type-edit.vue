<template>
    <a-form-item label="类型">
        <a-radio-group type="button" v-model="options.inputType">
            <a-radio value="text">文本</a-radio>
            <a-radio value="password">密码</a-radio>
        </a-radio-group>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'input-type-edit'
});
const {options} = defineProps(['options'])


</script>

<style scoped lang="scss">

</style>