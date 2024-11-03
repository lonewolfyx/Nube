<template>
    <div class="edit-configuration-wrapper">
        <!--        <a-card title="组件名称" :bordered="false">-->
        <!--            组件功能配置模块中心-->
        <!--        </a-card>-->
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="组件设置" class="px-2 pb-4">
                {{ form }}
                <DividerHeader title="基础设置"/>
                <a-form :model="form" layout="vertical">
                </a-form>
                <a-form :model="form" auto-label-width>
                    <a-form-item field="name" tooltip="Please enter username" label="标签的文本">
                        <a-input
                            v-model="form.name"
                            placeholder="请输入标签文本"
                        />
                    </a-form-item>
                    <a-form-item field="isRead" label="是否禁用">
                        <a-switch v-model="form.isRead" type="round"/>
                    </a-form-item>
                </a-form>
                <DividerHeader title="规则校验"/>
                <a-form :model="form" auto-label-width>
                    <a-tabs position="left" class="mb-8">
                        <a-tab-pane key="1" title="规则一">
                            <a-form-item field="isRead" label="校验类型">
                                <a-select placeholder="请选择校验类型">
                                    <a-option>Beijing</a-option>
                                    <a-option>Shanghai</a-option>
                                    <a-option>自定义</a-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item field="isRead" label="是否禁用">
                                <a-switch v-model="form.isRead" type="round"/>
                            </a-form-item>
                            <a-form-item field="isRead" label="是否禁用">
                                <a-switch v-model="form.isRead" type="round"/>
                            </a-form-item>
                            <a-form-item field="isRead" label="是否禁用">
                                <a-switch v-model="form.isRead" type="round"/>
                            </a-form-item>
                        </a-tab-pane>
                        <a-tab-pane key="2" title="规则二">
                            Content of Tab Panel 2
                        </a-tab-pane>
                        <a-tab-pane key="3" title="规则三">
                            Content of Tab Panel 3
                        </a-tab-pane>
                    </a-tabs>
                </a-form>
                <a-button long>添加规则</a-button>
            </a-tab-pane>
            <a-tab-pane key="2" title="表单设置" class="px-6">
                Content of Tab Panel 2
            </a-tab-pane>
        </a-tabs>

    </div>
</template>

<script setup>
import {reactive} from "vue";
import DividerHeader from "@/components/DividerHeader/DividerHeader.vue";

const form = reactive({
    name: '',
    post: '',
    isRead: false,
});
const handleSubmit = (data) => {
    console.log(data);
};
</script>

<style scoped lang="scss">
.edit-configuration-wrapper {
    @apply relative h-full bg-white overflow-y-scroll;
}
</style>