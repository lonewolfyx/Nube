<template>
    <a-form-item
        :field="field.prop"
        :label="field.label"
        :label-col-style="{
            width:field.labelWidth
        }"
    >
        <template v-if="field.inputType === 'password' ">
            <a-input-password
                v-model="field.value"
                :placeholder="field.placeholder"
                :allow-clear="field.clearable"
                :invisible-button="field.showPassword"
                :max-length="field.maxlength"
                :show-word-limit="true"
                :size="size[field.size]"
                :disabled="field.disabled"
                :input-attrs="{
                    minlength:field.minlength,
                }"
                :required="rule.required"
            />

        </template>
        <template v-else>
            <a-input
                v-model="field.value"
                :placeholder="field.placeholder"
                :allow-clear="field.clearable"
                :invisible-button="field.showPassword"
                :max-length="field.maxlength"
                :show-word-limit="true"
                :disabled="field.disabled"
                :size="size[field.size]"
                :input-attrs="{
                    minlength:field.minlength,
                }"
                :required="rule.required"
            />
        </template>
    </a-form-item>
</template>

<script setup>
const {field, rule} = defineProps(['field', 'rule']);

const size = {
    'large': 'large',
    'default': 'medium',
    'small': 'small',
}
</script>

<style scoped lang="scss">

</style>