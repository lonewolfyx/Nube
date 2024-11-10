<template>
    <a-form-item label="标签宽度" extra="作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto">
        <a-input v-model="options.labelWidth"/>
    </a-form-item>
</template>

<script setup>
defineOptions({
    name: 'label-width-edit'
});

const {options} = defineProps(['options'])


</script>

<style scoped lang="scss">

</style>