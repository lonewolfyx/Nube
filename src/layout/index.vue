<template>
    <a-layout class="layout-demo">
        <LayoutHeader/>
        <a-layout class="nube-container">
            <!--            <RouterView/>-->
            <router-view v-slot="{ Component, route }">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive>
                        <component :is="Component" :key="route.path"/>
                    </keep-alive>
                </transition>
            </router-view>
        </a-layout>
    </a-layout>
</template>

<script setup>

import LayoutHeader from "@/layout/LayoutHeader.vue";
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