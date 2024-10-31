<template>
    <a-layout class="layout-demo">
        <LayoutHeader/>
        <a-layout class="nube-container">
            <RouterView/>
        </a-layout>
    </a-layout>
</template>

<script setup>

import LayoutHeader from "@/layout/components/LayoutHeader.vue";
</script>

<style scoped lang="scss">
.nube-container {
    @apply flex;


    .edit-wrapper {
        grid-template-columns: 1fr 3fr 1fr;
        @apply w-full h-full grid ;
    }
}
</style>