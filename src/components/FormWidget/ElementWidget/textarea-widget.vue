<template>
    <el-form-item label="多行内容">
        <el-input v-model="fieldValue" type="textarea"/>
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";

const fieldValue = ref('fieldValue')

</script>

<style scoped lang="scss">

</style>