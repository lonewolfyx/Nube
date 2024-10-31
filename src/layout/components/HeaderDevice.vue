<template>
    <a-radio-group v-model="device" type="button" size="mini">
        <a-radio value="desktop">
            <icon-desktop/>
        </a-radio>
        <a-radio value="mobile">
            <icon-mobile/>
        </a-radio>
    </a-radio-group>
</template>

<script setup>
import {ref} from "vue";


const device = ref('desktop');

</script>

<style scoped>
.arco-radio-group-button {
    background: #3f3f46 !important;
    @apply p-0;
}

.arco-radio-button:hover,
.arco-radio-button.arco-radio-checked {
    background: var(--color-neutral-5);
    color: var(--color-bg-1)
}
</style>

<style scoped lang="scss">
:deep(.arco-radio-button) {
    @apply m-0;
}
</style>