<template>
    <a-form-item label="标签位置" extra="当设置为 左 或 右 时，则也需要设置 标签宽度 属性">
        <a-radio-group type="button" v-model="options.labelPosition">
            <a-radio value="left">左</a-radio>
            <a-radio value="right">右</a-radio>
            <a-radio value="top">顶部</a-radio>
        </a-radio-group>
    </a-form-item>
</template>

<script setup>
import {defineComponent} from "vue";

defineComponent({
    name: 'label-position'
});
const {options} = defineProps(['options'])


</script>

<style scoped lang="scss">

</style>