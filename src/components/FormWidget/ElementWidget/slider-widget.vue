<template>
    <el-form-item label="滑块">
        <el-slider v-model="fieldValue" />
    </el-form-item>
</template>

<script setup>

import {ref} from "vue";

const fieldValue = ref(20)
</script>

<style scoped lang="scss">

</style>