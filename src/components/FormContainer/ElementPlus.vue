<template>
    <el-form
        label-width="auto"
    >
        <DraggableRenderComponents/>
    </el-form>
</template>

<script setup>
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-input.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-checkbox.css';
import 'element-plus/theme-chalk/el-checkbox-group.css';
import 'element-plus/theme-chalk/el-checkbox-button.css';
import 'element-plus/theme-chalk/el-color-picker.css';

import 'element-plus/theme-chalk/el-date-picker.css'
import 'element-plus/theme-chalk/el-scrollbar.css'
import 'element-plus/theme-chalk/el-popper.css'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-divider.css';
import 'element-plus/theme-chalk/el-image.css';
import 'element-plus/theme-chalk/el-input-number.css';
import 'element-plus/theme-chalk/el-radio.css';
import 'element-plus/theme-chalk/el-radio-group.css';
import 'element-plus/theme-chalk/el-rate.css';
import 'element-plus/theme-chalk/el-select.css';
import 'element-plus/theme-chalk/el-slider.css';
import 'element-plus/theme-chalk/el-switch.css';
import 'element-plus/theme-chalk/el-time-picker.css';
import 'element-plus/theme-chalk/el-time-select.css';
import 'element-plus/theme-chalk/el-transfer.css';
import 'element-plus/theme-chalk/el-upload.css';
import 'element-plus/theme-chalk/el-progress.css';
import DraggableRenderComponents from "@/components/FormContainer/DraggableRenderComponents.vue";

defineOptions({
    name: 'element-container'
});
</script>

<style scoped lang="scss">
</style>