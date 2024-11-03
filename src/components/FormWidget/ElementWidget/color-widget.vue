<template>
    <el-form-item label="ColorPicker 颜色选择器">
        <el-color-picker v-model="fieldValue" />
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-color-picker.css';

const fieldValue = ref('#409EFF')

</script>

<style scoped lang="scss">

</style>