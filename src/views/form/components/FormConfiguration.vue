<template>
    <div class="edit-configuration-wrapper">
        <!--        <a-card title="组件名称" :bordered="false">-->
        <!--            组件功能配置模块中心-->
        <!--        </a-card>-->
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="组件设置" class="px-2 pb-4">
                <!--                                {{ form }}-->
                <!--                {{ rule ? 'y' : 'n' }}-->
                <a-form
                    :model="form"
                    layout="horizontal"
                    auto-label-width
                    size="medium"
                    label-align="left"
                >

                    <a-form-item label="组件 ID" v-if="currentWidget">
                        <a-input v-model="currentWidget.id" disabled/>
                    </a-form-item>
                    <template v-for="(_,index) in config">
                        {{ generateEditComponentName(index) }}-{{ index }}-edit
                        <component :is="editComponent[generateEditComponentName(index)]" :options="form"/>
                    </template>
                </a-form>
                <!--                <BoxModelSetting/>-->
                <!--                <DividerHeader title="基础设置"/>-->
                <!--                <a-form :model="form" layout="vertical">-->
                <!--                </a-form>-->
                <!--                <a-form :model="form" auto-label-width>-->
                <!--                    <a-form-item field="name" tooltip="Please enter username" label="标签的文本">-->
                <!--                        <a-input-->
                <!--                            v-model="form.name"-->
                <!--                            placeholder="请输入标签文本"-->
                <!--                        />-->
                <!--                    </a-form-item>-->
                <!--                    <a-form-item field="isRead" label="是否禁用">-->
                <!--                        <a-switch v-model="form.isRead" type="round"/>-->
                <!--                    </a-form-item>-->
                <!--                </a-form>-->
                <!--                <DividerHeader title="规则校验"/>-->
                <!--                <a-form :model="form" auto-label-width>-->
                <!--                    <a-tabs position="left" class="mb-8">-->
                <!--                        <a-tab-pane key="1" title="规则一">-->
                <!--                            <a-form-item field="isRead" label="校验类型">-->
                <!--                                <a-select placeholder="请选择校验类型">-->
                <!--                                    <a-option>Beijing</a-option>-->
                <!--                                    <a-option>Shanghai</a-option>-->
                <!--                                    <a-option>自定义</a-option>-->
                <!--                                </a-select>-->
                <!--                            </a-form-item>-->
                <!--                            <a-form-item field="isRead" label="是否禁用">-->
                <!--                                <a-switch v-model="form.isRead" type="round"/>-->
                <!--                            </a-form-item>-->
                <!--                            <a-form-item field="isRead" label="是否禁用">-->
                <!--                                <a-switch v-model="form.isRead" type="round"/>-->
                <!--                            </a-form-item>-->
                <!--                            <a-form-item field="isRead" label="是否禁用">-->
                <!--                                <a-switch v-model="form.isRead" type="round"/>-->
                <!--                            </a-form-item>-->
                <!--                        </a-tab-pane>-->
                <!--                        <a-tab-pane key="2" title="规则二">-->
                <!--                            Content of Tab Panel 2-->
                <!--                        </a-tab-pane>-->
                <!--                        <a-tab-pane key="3" title="规则三">-->
                <!--                            Content of Tab Panel 3-->
                <!--                        </a-tab-pane>-->
                <!--                    </a-tabs>-->
                <!--                </a-form>-->
                <!--                <a-button long>添加规则</a-button>-->
            </a-tab-pane>
            <a-tab-pane key="2" title="表单设置" class="px-6">
                Content of Tab Panel 2
            </a-tab-pane>
        </a-tabs>

    </div>
</template>

<script setup>
import {computed, nextTick, shallowRef} from "vue";
import {useDesignerStore} from "@/stores/designer.js";
import {useRenderComponentStore} from "@/stores/renderComponent.js";
import {registerEditComponents} from "@/components/FormWidgetEdit/FormWidgetEdit.js";
import {generateEditComponentName} from "@/util/util.js";

const designer = useDesignerStore()
const renderComponentStore = useRenderComponentStore()

const selectIndex = computed(() => designer.config.selectIndex)
const content = computed(() => renderComponentStore.components);
const currentWidget = computed(() => content.value[selectIndex.value]);
const config = computed(() => currentWidget.value?.config);
const rule = computed(() => currentWidget.value?.rule);

const editComponent = shallowRef({});
nextTick(async () => {
    editComponent.value = await registerEditComponents()
    // console.log('注册的编辑组件', JSON.stringify(editComponent.value))
})
const form = computed({
    get() {
        // console.log(config.value)
        return config.value || {};
    },
    set(newValue) {
        console.log('编辑后新的数据值：', newValue)
    }
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