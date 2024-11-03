<template>
    <el-form-item label="Switch 开关">
        <el-switch v-model="fieldValue"/>
    </el-form-item>
</template>

<script setup>

import {ref} from "vue";

const fieldValue = ref(true)
</script>

<style scoped lang="scss">

</style>