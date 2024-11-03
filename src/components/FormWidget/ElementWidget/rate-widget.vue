<template>
    <el-form-item label="评分">
        <el-rate v-model="fieldValue"/>
    </el-form-item>
</template>

<script setup>

import {ref} from "vue";

const fieldValue = ref(3)
</script>

<style scoped lang="scss">

</style>