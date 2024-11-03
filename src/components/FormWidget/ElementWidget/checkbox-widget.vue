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
import {ref} from "vue";

const fieldValue = ref('')
</script>

<style scoped lang="scss">

</style>