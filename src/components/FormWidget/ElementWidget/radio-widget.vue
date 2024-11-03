<template>
    <el-form-item label="单选框">
        <el-radio-group v-model="fieldValue">
            <el-radio :value="1">Option A</el-radio>
            <el-radio :value="2">Option B</el-radio>
            <el-radio :value="3">Option C</el-radio>
        </el-radio-group>

    </el-form-item>
</template>

<script setup>
import {ref} from "vue";
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-radio.css';
import 'element-plus/theme-chalk/el-radio-group.css';

const fieldValue = ref(1)

</script>

<style scoped lang="scss">

</style>