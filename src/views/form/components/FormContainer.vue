<template>
    <!--    <div>组件按钮{{ designer.config }}{{ content }}</div>-->
    <div class="edit-container-wrapper">
        <!--                    @choose="choose"-->
        <div class="tips">请从左侧组件库中挑选所需组件，拖拽至此处进行预览与布局调整</div>
        <template v-if="designer.config.ui === 'element'">
            <ElementPlus/>
        </template>
        <template v-else-if="designer.config.ui === 'antd'">这是 antd 的表单</template>
        <template v-else-if="designer.config.ui === 'arco'">这是 arco 的表单</template>
    </div>
</template>

<script setup>
import {useDesignerStore} from "@/stores/designer.js";
import ElementPlus from "@/components/FormContainer/ElementPlus.vue";

const designer = useDesignerStore()


</script>

<style scoped lang="scss">
:deep(.el-form) {
    @apply relative w-full h-full;
}

.edit-container-wrapper {
    @apply relative w-full h-full overflow-hidden z-10 overflow-y-scroll;

    &.is-mobile {
        width: 500px;
        @apply m-auto;
    }

    .tips {
        @apply absolute flex items-center justify-center w-full h-full text-base text-gray-400 z-20;
    }

}

.move {
    display: none;
}
</style>