<template>
    <el-form-item label="穿梭框">
        <el-transfer v-model="fieldValue" :data="data"/>
    </el-form-item>
</template>

<script setup>

import {ref} from "vue";

const fieldValue = ref([])


const generateData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
        data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0,
        })
    }
    return data
}

const data = ref(generateData())


</script>

<style scoped lang="scss">

</style>