<template>
    <el-form-item label="评分">
        <el-rate v-model="fieldValue"/>
    </el-form-item>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-rate.css';

import {ref} from "vue";

const fieldValue = ref(3)
</script>

<style scoped lang="scss">

</style>