<template>
    <svg class="iconSize" :class="className">
        <use :href="symbolId" :class="color?'':'svg-icon-fill'" :fill="color"/>
    </svg>
</template>

<script setup>
import {computed} from "vue";

const {color, prefix, name, className} = defineProps({
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
    },
    className: {
        type: String,
        default: 'w-6 h-6'
    }
});
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<style scoped lang="scss">
.iconSize {
    @apply mr-1;
}

.svg-icon-fill {
    fill: rgb(100 116 139 / var(--tw-text-opacity));
}
</style>