<template>
    <a-form-item label="类型">
        <a-switch type="round" v-model="options.clearable"/>
    </a-form-item>
</template>

<script setup>
import {defineComponent} from "vue";

defineComponent({
    name: 'input-type'
});
const {options} = defineProps(['options'])


</script>

<style scoped lang="scss">

</style>