<template>
    <div class="edit-configuration-wrapper">
        <!--        <a-card title="组件名称" :bordered="false">-->
        <!--            组件功能配置模块中心-->
        <!--        </a-card>-->
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="组件设置" class="px-5 pb-4">
                <a-form
                    :model="currentWidget"
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
<!--                        {{_}}-->
                        <!--                        {{ generateEditComponentName(index) }}-{{ index }}-edit-->
<!--                        {{ generateEditComponentName(index) }}-->
                        <component
                            :is="editComponent[generateEditComponentName(index)]"
                            :options="currentWidget.config"
                        />
                    </template>
                </a-form>
                <a-form
                    :model="currentWidget.rule"
                    auto-label-width
                    size="medium"
                    label-align="left"
                    v-if="currentWidget.rule"
                    ref="ruleFormRef"
                >
                    <DividerHeader title="规则校验"/>
                    <component
                        :is="editComponent[generateEditComponentName('rule')]"
                        :options="currentWidget.rule"
                    />
                </a-form>
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
const configurationRef = useTemplateRef('configurationRef');
const ruleFormRef = useTemplateRef('ruleFormRef')
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

nextTick(async () => {
    editComponent.value = await registerEditComponents();

    if (useDesigner().getWidgetList().length >= 1) {
        // console.log('有初始数据', selectIndex.value, useDesigner().getWidgetList())
        currentWidget.value = cloneDeep(useDesigner().getWidgetList()[selectIndex.value] || {})
        isInitData.value = true;
    }
});

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

// 监听 currentWidget.value.config 的变动
watch(() => ({
    config: currentWidget.value.config,
    rule: currentWidget.value.rule
}), debounce((newValue, oldValue) => {
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
    max-width: 22.5rem;
    @apply relative h-full bg-white overflow-y-scroll;
}
</style>