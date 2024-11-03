<template>
    <el-form-item label="滑块">
        <el-slider v-model="fieldValue" />
    </el-form-item>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-slider.css';

import {ref} from "vue";

const fieldValue = ref(20)
</script>

<style scoped lang="scss">

</style>