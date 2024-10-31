<template>
    <div class="edit-sidebar-wrapper">
        <div class="p-2">
            <a-form :model="form" layout="horizontal">
                <a-form-item field="framework" label="框架">
                    <a-radio-group v-model="form.framework" type="button" size="large">
                        <a-radio value="vue">Vue</a-radio>
                        <a-radio value="react">React</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item field="framework" label="UI 组件">
                    <a-radio-group v-model="form.ui" type="button" size="medium">
                        <a-radio value="element">Element</a-radio>
                        <a-radio value="antdv">Ant Design</a-radio>
                        <a-radio value="arco">Arco</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-form>
        </div>

        <a-tabs :default-active-key="tabsActive">
            <a-tab-pane key="component" title="组件库">
                <div class="p-2">
                    <a-row :gutter="24">
                        <a-col :span="12" v-for="(item,index) in tools" :key="index">
                            <div class="draggable-item">
                                <span class="icon">
                                    <SvgIcon :name="item.icon"/>
                                </span>
                                <span class="name">{{ item.label }}</span>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </a-tab-pane>
            <a-tab-pane key="template" title="模板库">
                <p>待收集</p>
            </a-tab-pane>
        </a-tabs>

    </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const tabsActive = ref('component');

const form = reactive({
    name: '',
    post: '',
    isRead: false,
    framework: 'vue',
    ui: 'element'
})

const tools = [
    {label: '输入框', icon: 'input'},
    {label: '多行输入框', icon: 'multi-line'},

    {label: '单选框', icon: 'radio'},
    {label: '多选框', icon: 'checkbox'},

    {label: '评分', icon: 'rate'},
    {label: '下拉选择器', icon: 'select'},

    {label: '滑块', icon: 'slider'},
    {label: '开关', icon: 'switch'},

    {label: '日期选择器', icon: 'date-picker'},
    {label: '时间选择器', icon: 'time-picker'},

    {label: '数字输入框', icon: 'number-input'},
    {label: '取色器', icon: 'color'},
    {label: '上传', icon: 'upload'},
    {label: '穿梭框', icon: 'transfer'},
    {label: '头像', icon: 'avatar'},
    {label: '日历', icon: 'calendar'},
    {label: '图片', icon: 'image'},
    {label: '标签', icon: 'tag'},
    {label: '分割线', icon: 'divider'},
]
</script>

<style scoped>
:deep(.arco-collapse-item-header) {
    background-color: var(--color-fill-1) !important;
    @apply border-transparent;
}

:deep(.arco-collapse-item-content) {
    @apply bg-transparent;
}
</style>

<style scoped lang="scss">
.edit-sidebar-wrapper {
    @apply relative h-full bg-white overflow-y-scroll;
}

.draggable-item {
    @apply border rounded border-solid border-slate-300  flex items-center justify-start flex-row text-slate-500 p-2 mb-3;

    .icon {
        @apply w-6 h-6 text-slate-500 mr-1.5;
    }

    .name {
        @apply text-xs;
    }
}
</style>