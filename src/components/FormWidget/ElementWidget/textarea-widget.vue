<template>
    <el-form-item
        :label="field.label"
        :label-position="field.labelPosition"
        :label-width="field.labelWidth"
        :prop="field.prop"
        :required="rule.required"
    >
        <el-input
            v-model="field.value"
            :placeholder="field.placeholder"
            type="textarea"
        />
    </el-form-item>
</template>

<script setup>

const {field, rule} = defineProps(['field', 'rule']);

</script>

<style scoped lang="scss">

</style>