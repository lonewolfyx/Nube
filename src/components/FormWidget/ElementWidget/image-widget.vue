<template>
    <el-form-item label="图片">
        <el-image :src="fieldValue" />
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-image.css';

const fieldValue = ref('https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_2f7b900078cb8a7cad997.jpeg')

</script>

<style scoped lang="scss">

</style>