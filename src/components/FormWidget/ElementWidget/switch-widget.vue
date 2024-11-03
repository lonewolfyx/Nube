<template>
    <el-form-item label="Switch 开关">
        <el-switch v-model="fieldValue"/>
    </el-form-item>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-switch.css';

import {ref} from "vue";

const fieldValue = ref(true)
</script>

<style scoped lang="scss">

</style>