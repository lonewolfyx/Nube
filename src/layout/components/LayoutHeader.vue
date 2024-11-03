<template>
    <a-layout-header>
        <div
            class="nube-header bg-zinc-800 border-0 flex justify-between items-center p-1.5 px-4 text-slate-100"
            style="border-bottom-style: solid">
            <div class="flex items-center">
                <img alt="logo" :src="Logo" class="w-5">
                <a-divider direction="vertical"/>
                <div>
                    Nube · 低代码平台
                </div>
            </div>
            <div class="device">
                <HeaderDevice/>
            </div>
            <div class="user-profile">
                <a-space :size="15">
                    <a-button size="small" @click="clearComponents()">
                        <template #icon>
                            <icon-delete/>
                        </template>
                        <template #default>清空</template>
                    </a-button>
                    <a-button size="small" @click="outCodeDrawerRef.handleClick()">
                        <template #icon>
                            <icon-code/>
                        </template>
                        <template #default>预览</template>
                    </a-button>
                    <a-button size="small" @click="outCodeDrawerRef.handleClick()" type="primary" class="">
                        <template #icon>
                            <icon-to-top/>
                        </template>
                        <template #default>立即发布</template>
                    </a-button>
                    <a-avatar :size="32">
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
import {useRenderComponentStore} from "@/stores/renderComponent.js";

const outCodeDrawerRef = useTemplateRef('outCodeDrawerRef');
const device = ref('desktop');
const renderComponents = useRenderComponentStore()
const clearComponents = () => {
    renderComponents.setData([])
}
</script>

<style scoped lang="scss">
.arco-layout-header {
    width: 100%;
    height: var(--nube-header-height);
    min-height: var(--nube-header-height);

    .nube-header {
        width: 100%;
        height: 100%;
    }
}

.header-btn-toolbar {
    .arco-radio-button:hover,
    .arco-radio-button.arco-radio-checked {
        color: var(--color-text-2) !important;
        @apply bg-transparent !important;
    }

    .arco-radio-button:hover::before,
    .arco-radio-button:hover + .arco-radio-button::before,
    .arco-radio-button.arco-radio-checked::before,
    .arco-radio-button.arco-radio-checked + .arco-radio-button::before {
        opacity: 1
    }
}
</style>