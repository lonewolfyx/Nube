<template>
    <el-form-item :label="field.label">
        <el-input
            v-model="field.value"
            :placeholder="field.placeholder"
            :maxlength="field.maxlength"
            :minlength="field.minlength"
            :clearable="field.clearable"
            :disabled="field.disabled"
            :size="field.size"
            :show-password="field.showPassword"
        />
    </el-form-item>
</template>

<script setup>
const {field} = defineProps(['field'])
</script>

<style scoped lang="scss">

</style>