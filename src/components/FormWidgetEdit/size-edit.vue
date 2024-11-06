<template>
    <a-form-item label="组件大小">
        <a-radio-group type="button" v-model="options.size">
            <a-radio value="large">大</a-radio>
            <a-radio value="default">默认</a-radio>
            <a-radio value="small">小</a-radio>
        </a-radio-group>
    </a-form-item>
</template>

<script setup>
const {options} = defineProps(['options'])
</script>

<style scoped lang="scss">

</style>