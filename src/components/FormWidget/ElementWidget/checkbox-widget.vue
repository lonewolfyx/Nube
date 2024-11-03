<template>
    <el-form-item label="多选框">
        <el-checkbox
            v-model="fieldValue"
        >
            Check all
        </el-checkbox>
    </el-form-item>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-checkbox.css';
import 'element-plus/theme-chalk/el-checkbox-group.css';
import 'element-plus/theme-chalk/el-checkbox-button.css';

import {ref} from "vue";

const fieldValue = ref('')
</script>

<style scoped lang="scss">

</style>