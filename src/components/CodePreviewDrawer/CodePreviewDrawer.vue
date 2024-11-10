<template>
    <a-drawer
        width="50%"
        :visible="isShow"
        @ok="changeShowStatus"
        @cancel="changeShowStatus"
        title="预览"
        unmountOnClose
    >
        <template v-for="(item,index) in widget" :key="widget.id">
            <keep-alive>
                <component
                    :is="generateComponentName(item.type)"
                    :field="item.config"
                    :rule="item.rule"
                />
            </keep-alive>
        </template>
        test
    </a-drawer>
</template>

<script setup>
import {ref} from "vue";
import {cloneDeep} from "lodash-es";
import {useDesigner} from "@/hooks/designer.js";
import {generateComponentName} from "@/util/util.js";

const isShow = ref(false);

const widget = ref([])

const changeShowStatus = () => {
    isShow.value = !isShow.value;
    if (!isShow.value) {
        widget.value = []
    }
};
const showCode = () => {
    changeShowStatus();
    widget.value = cloneDeep(useDesigner().getWidgetList() || [])
};

defineExpose({showCode})

</script>

<style scoped lang="scss">

</style>