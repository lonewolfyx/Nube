<template>
    <div class="edit-configuration-wrapper">
        <!--        <a-card title="组件名称" :bordered="false">-->
        <!--            组件功能配置模块中心-->
        <!--        </a-card>-->
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="组件设置" class="px-2 pb-4">
                <a-form
                    :model="currentWidget"
                    layout="horizontal"
                    auto-label-width
                    size="medium"
                    label-align="left"
                    v-if="currentWidget.config"
                    ref="configurationRef"
                >
                    <DividerHeader title="基础设置"/>
                    <a-form-item label="组件 ID">
                        <a-input v-model="currentWidget.id" disabled/>
                    </a-form-item>
                    <template v-for="(_,index) in currentWidget.config">
                        <!--                        &lt;!&ndash;                        &lt;!&ndash;                        {{ generateEditComponentName(index) }}-{{ index }}-edit&ndash;&gt;&ndash;&gt;-->
                        <!--                        &lt;!&ndash;                        {{ generateEditComponentName(index) }}&ndash;&gt;-->
                        <component
                            :is="editComponent[generateEditComponentName(index)]"
                            :options="currentWidget.config"
                        />
                    </template>
                    <!--                    <LabelEdit v-if="currentWidget" :options="currentWidget.config"/>-->
                </a-form>
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
import {defineComponent, nextTick, onMounted, ref, shallowRef, useTemplateRef, watch} from "vue";
import {useDesignerStore} from "@/stores/designer.js";
import LabelEdit from "@/components/FormWidgetEdit/label-edit.vue";
import emitter from "@/util/eventBus.js";
import {useDesigner} from "@/hooks/designer.js";
import {cloneDeep, debounce} from "lodash-es";
import DividerHeader from "@/components/DividerHeader/DividerHeader.vue";
import {generateEditComponentName} from "@/util/util.js";
import {registerEditComponents} from "@/components/FormWidgetEdit/FormWidgetEdit.js";

defineComponent({
    name: 'FormConfiguration',
    components: {
        LabelEdit
    }
})
const designer = useDesignerStore()
const configurationRef = useTemplateRef('configurationRef')
// const renderComponentStore = useRenderComponentStore()

const selectIndex = ref(designer.config.selectIndex)
// const widgetList = computed(() => useDesigner().getWidgetList())

const editComponent = shallowRef({});

const currentWidget = ref({});

// 是否是清空的数据
const isClear = ref(false)
// 是否是初始化的数据
const isInitData = ref(false)
// 是否是曝光的数据
const isEmitterData = ref(false)

onMounted(() => {
    emitter.on('clear', (e) => {
        isClear.value = true
        currentWidget.value = {}
        // console.log('做清空事件了')
    });

    emitter.on('selectIndex', async (index) => {
        selectIndex.value = index
        // console.log('选中的次序是', index);
        isEmitterData.value = true;
        await nextTick()
        currentWidget.value = cloneDeep(useDesigner().getWidgetList()[index] || {})
        // console.log(currentWidget.value)
    });

});

nextTick(async () => {
    editComponent.value = await registerEditComponents();

    if (useDesigner().getWidgetList().length >= 1) {
        // console.log('有初始数据', selectIndex.value, useDesigner().getWidgetList())
        currentWidget.value = cloneDeep(useDesigner().getWidgetList()[selectIndex.value] || {})
        isInitData.value = true;
    }
});


// 监听 currentWidget 的变动
watch(() => currentWidget.value.config, debounce((newValue, oldValue) => {
    if (isEmitterData.value || isInitData.value || isClear.value) {
        isEmitterData.value = false;
        isInitData.value = false;
        isClear.value = false;
        return '';
    }
    // console.log('来自 configuration 更新数据', newValue, oldValue)
    // currentWidget.value
    useDesigner().updateWidgetAtIndex(currentWidget.value, selectIndex.value)
    emitter.emit('hasNewWidgetList')

}, 300), { // 300 毫秒内如果没有新的变化，则执行回调
    deep: true,
});

</script>

<style scoped lang="scss">
.edit-configuration-wrapper {
    @apply relative h-full bg-white overflow-y-scroll;
}
</style>