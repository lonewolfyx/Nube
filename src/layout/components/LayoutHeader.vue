<template>
    <a-layout-header>
        <div class="bg-zinc-800 border-b border-b-slate-200 flex justify-between items-center p-1.5 px-4 text-slate-100"
             style="border-bottom-style: solid">
            <div class="flex items-center">
                <img alt="logo" :src="Logo" class="w-5">
                <a-divider direction="vertical"/>
                <div>
                    Nube · 低代码平台
                </div>
            </div>
            <div class="">
                <HeaderDevice/>
            </div>
            <div class="user-profile">
                <a-space :size="15">
                    <a-button size="mini" @click="outCodeDrawerRef.handleClick()">出码</a-button>
                    <a-avatar :size="24">
                        <img
                            alt="avatar"
                            src="https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYdVBf4PAimDIpbGcAzgiCJtENerAA8oCA8AwO.jpeg"
                        />
                    </a-avatar>
                </a-space>
            </div>
        </div>
    </a-layout-header>
    <OutCodeDrawer ref="outCodeDrawerRef"/>
</template>

<script setup>
import Logo from '@/assets/images/logo.svg';
import {ref, useTemplateRef} from "vue";
import HeaderDevice from "@/layout/components/HeaderDevice.vue";
import OutCodeDrawer from "@/components/OutCodeDrawer/OutCodeDrawer.vue";

const outCodeDrawerRef = useTemplateRef('outCodeDrawerRef');
const device = ref('desktop')
</script>

<style scoped>
.arco-layout-header {
    width: 100%;
    height: var(--nube-header-height);
    min-height: var(--nube-header-height);
}
</style>