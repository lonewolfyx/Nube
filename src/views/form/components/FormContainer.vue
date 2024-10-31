<template>
    <div class="edit-container-wrapper">
        <div class="edit-container-body">
            <p>内容拖拽区域组件渲染预览</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.edit-container-wrapper {
    @apply relative w-full h-full;

    &.is-mobile {
        width: 500px;
        @apply m-auto;
    }

    .edit-container-body {
        @apply relative w-full h-full flex bg-slate-200 border rounded border-dotted p-2.5;
    }
}
</style>