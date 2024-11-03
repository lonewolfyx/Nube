<template>
    <el-form-item label="单行内容">
        <el-input v-model="fieldValue"/>
    </el-form-item>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-input.css';

import {ref} from "vue";

const fieldValue = ref('fieldValue')
</script>

<style scoped lang="scss">

</style>