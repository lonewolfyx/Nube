<template>
    <el-form-item label="时间选择器">
        <el-time-picker
            v-model="fieldValue"
            arrow-control
            placeholder="Arbitrary time"
        />
        <el-time-picker
            v-model="fieldValue"
            is-range
            arrow-control
            range-separator="To"
            start-placeholder="Start time"
            end-placeholder="End time"
        />

    </el-form-item>
</template>

<script setup>
import {ref} from "vue";


const fieldValue = ref('')

</script>

<style scoped lang="scss">

</style>