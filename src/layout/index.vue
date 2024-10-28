<template>
    <a-layout class="layout-demo">
        <a-layout-header>
            <div class="bg-white border-b border-b-slate-200 flex justify-between items-center p-2">
                <div class="flex items-center">
                    <a-button type="text">
                        <template #icon>
                            <icon-home :size="24"/>
                        </template>
                    </a-button>
                    <a-divider direction="vertical"/>
                    <div>
                        Nube · 低代码平台
                    </div>
                </div>
                <div>用户信息</div>
            </div>
        </a-layout-header>
        <a-layout class="nube-container">
            <div class="edit-wrapper">
                <div>功能模块</div>
                <div>内容区域临时预览</div>
                <div>功能配置模块中心</div>
            </div>
        </a-layout>
    </a-layout>
</template>

<script setup>

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