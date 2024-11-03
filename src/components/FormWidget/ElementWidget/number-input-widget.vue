<template>
    <el-form-item label="数字输入框">
        <el-input-number v-model="fieldValue" :min="1" :max="10" @change="handleChange" />
    </el-form-item>
</template>

<script setup>

import {ref} from "vue";

const fieldValue = ref(30)


const handleChange = (value) => {
    console.log(value)
}


</script>

<style scoped lang="scss">

</style>