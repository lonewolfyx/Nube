<template>
    <div class="edit-sidebar-wrapper">
        <div class="p-2">
            <a-form :model="queryForm" auto-label-width>
                <a-form-item field="framework" label="框架">
                    <a-radio-group v-model="queryForm.framework" type="button" size="large">
                        <a-radio value="vue" class="flex">
                            <SvgIcon name="product-vue" className="w-5 h-5"/>
                            Vue
                        </a-radio>
                        <a-radio value="react" disabled >
                            <SvgIcon name="product-react" className="w-5 h-5"/>
                            React
                        </a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item field="framework" label="Ui 组件库">
                    <a-radio-group v-model="queryForm.ui" type="button" size="default">
                        <a-radio value="element">
                            <SvgIcon name="product-element-plus" className="w-4 h-4"/>
                            Element
                        </a-radio>
                        <a-radio value="antd">
                            <SvgIcon name="product-antd" className="w-4 h-4"/>
                            Antd
                        </a-radio>
                        <a-radio value="arco">
                            <SvgIcon name="product-arco" className="w-4 h-4"/>
                            Arco
                        </a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-form>
        </div>

        <a-tabs :default-active-key="tabsActive">
            <a-tab-pane key="component" title="组件库">
                <DraggableWidget/>
            </a-tab-pane>
            <a-tab-pane key="template" title="模板库">
                <p>待收集</p>
            </a-tab-pane>
        </a-tabs>

    </div>
</template>

<script setup>
import {ref} from "vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import DraggableWidget from "@/views/form/components/DraggableWidget.vue";
import {useDesignerStore} from "@/stores/designer.js";

const tabsActive = ref('component');

const designer = useDesignerStore()
const queryForm = designer.config
</script>

<style scoped lang="scss">
:deep(.arco-collapse-item-header) {
    background-color: var(--color-fill-1) !important;
    @apply border-transparent;
}

:deep(.arco-collapse-item-content) {
    @apply bg-transparent;
}

:deep(.arco-radio-button-content) {
    @apply flex items-center;

    .icon-size {
        @apply mr-1.5;
    }
}

.edit-sidebar-wrapper {
    @apply relative h-full bg-white overflow-y-scroll;
}
</style>