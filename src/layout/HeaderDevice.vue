<template>
    <a-radio-group v-model="queryForm.device" type="button" size="medium">
        <a-radio value="pc">
            <icon-desktop/>
        </a-radio>
        <a-radio value="mobile">
            <icon-mobile/>
        </a-radio>
    </a-radio-group>
</template>

<script setup>
import {useDesignerStore} from "@/stores/designer.js";

const designer = useDesignerStore()
const queryForm = designer.config


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