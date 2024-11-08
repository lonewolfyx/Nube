<template>
    <el-form-item
        :label="field.label"
        :label-position="field.labelPosition"
        :label-width="field.labelWidth"
    >
        <el-input
            v-model="field.value"
            :placeholder="field.placeholder"
            :maxlength="field.maxlength"
            :minlength="field.minlength"
            :clearable="field.clearable"
            :disabled="field.disabled"
            :size="field.size"
            :show-password="field.showPassword"
            :type="field.inputType"
        />
    </el-form-item>
</template>

<script setup>
const {field} = defineProps(['field'])
</script>

<style scoped lang="scss">

</style>