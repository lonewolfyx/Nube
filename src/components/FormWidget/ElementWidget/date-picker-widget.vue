<template>
    <el-form-item label="日期选择器">
        <el-date-picker
            v-model="fieldValue"
            type="date"
            placeholder="Pick a day"
        />
        <el-date-picker
            v-model="fieldValue"
            type="datetime"
            placeholder="Pick a day"
        />
        <el-date-picker
            v-model="fieldValue"
            type="datetimerange"
            placeholder="Pick a day"
        />
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";


const fieldValue = ref('fieldValue')

</script>

<style scoped lang="scss">

</style>