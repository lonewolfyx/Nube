<template>
    <svg class="icon-size">
        <use :href="symbolId" class="svg-icon-fill"/>
    </svg>
</template>

<script setup>
import {computed} from "vue";

const {color, prefix, name} = defineProps({
    color: {
        type: String
    },
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        default: ''
    }
});
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<style scoped lang="scss">
.icon-size {
    @apply w-6 h-6;
}

.svg-icon-fill {
    fill: rgb(100 116 139 / var(--tw-text-opacity));
}
</style>