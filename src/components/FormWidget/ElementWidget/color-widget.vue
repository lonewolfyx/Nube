<template>
    <el-form-item label="ColorPicker 颜色选择器">
        <el-color-picker v-model="fieldValue" />
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";

const fieldValue = ref('#409EFF')

</script>

<style scoped lang="scss">

</style>