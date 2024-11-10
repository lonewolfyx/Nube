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
const {field, rule} = defineProps(['field', 'rule']);

// const checkAge = (rule, value, callback) => {
//     if (!value) {
//         return callback(new Error('Please input the age'))
//     }
//     setTimeout(() => {
//         if (!Number.isInteger(value)) {
//             callback(new Error('Please input digits'))
//         } else {
//             if (value < 18) {
//                 callback(new Error('Age must be greater than 18'))
//             } else {
//                 callback()
//             }
//         }
//     }, 1000)
//     callback()
// }

// { validator: checkAge, trigger: 'blur' }
const rules = [
    {
        required: true,
        message: 'Please input email address',
        trigger: 'blur',
    },
    {
        type: 'email',
        message: 'Please input correct email address',
        trigger: ['blur', 'change'],
    },
];

</script>

<style scoped lang="scss">

</style>