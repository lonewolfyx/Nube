<template>
    <el-form
        label-width="auto"
    >
        <!--        <el-form-item label="Activity name">-->
        <!--            <el-input v-model="nativeModelValue"/>-->
        <!--        </el-form-item>-->
        <DraggableRenderComponents/>
    </el-form>
</template>

<script setup>
import {ref} from "vue";
import 'element-plus/theme-chalk/el-form.css'; // 导入 el-form 样式
import 'element-plus/theme-chalk/el-input.css';
import DraggableRenderComponents from "@/components/FormContainer/DraggableRenderComponents.vue"; // 导入 el-input 样式

const nativeModelValue = ref('')
</script>

<style scoped lang="scss">

</style>