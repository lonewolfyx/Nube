<template>
    <!--    <a-form-item label="表单必填">-->
    <!--        <a-switch type="round" v-model="options.required"/>-->
    <!--    </a-form-item>-->
    <div class="rule-item-list">
        <a-form-item label="表单必填" class="rule-item">
            <a-switch type="round" v-model="options.required"/>
        </a-form-item>
        <template v-if="options.required">
            <a-form-item label="校验时机" class="rule-item">
                <a-checkbox-group v-model="options.trigger">
                    <a-checkbox value="blur">Blur</a-checkbox>
                    <a-checkbox value="change">Change</a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item label="类型" class="rule-item">
                <a-select placeholder="请选中触发的校验类型" v-model="options.type">
                    <a-option v-for="item in types" :key="'type-'+item" :value="item">{{ item }}</a-option>
                </a-select>
            </a-form-item>
            <a-form-item label="提示信息" class="rule-item">
                <a-input type="round" v-model="options.message"/>
            </a-form-item>
        </template>
    </div>

    <template v-for="rule in options.rules" :key="rule.id">
        <div class="rule-item-list">
            <div class="delete-item" @click="handleDelete(rule)">
                <icon-delete/>
            </div>
            <a-form-item label="校验时机" class="rule-item">
                <a-checkbox-group v-model="rule.trigger">
                    <a-checkbox value="blur">Blur</a-checkbox>
                    <a-checkbox value="change">Change</a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item label="类型" class="rule-item">
                <a-select placeholder="请选中触发的校验类型" v-model="rule.type">
                    <a-option v-for="item in types" :key="'rules-type-'+item" :value="item">{{ item }}</a-option>
                </a-select>
            </a-form-item>

            <template v-if="['string','number'].includes(rule.type)">
                <a-form-item label="最小长度" class="rule-item">
                    <a-input-number placeholder="最小长度" mode="button" v-model="rule.minlength" :min="0"/>
                </a-form-item>
                <a-form-item label="最大长度" class="rule-item">
                    <a-input-number placeholder="最大长度" mode="button" v-model="rule.maxlength" :min="0"/>
                </a-form-item>
            </template>

            <a-form-item label="提示信息" class="rule-item">
                <a-input type="round" v-model="rule.message"/>
            </a-form-item>
            {{ rule }}

        </div>
    </template>

    <a-button long @click="handleAddFormValidate">添加规则</a-button>
</template>

<script setup>
// TODO 这里的校验规则还未完善

import {generateUuid} from "@/util/util.js";

defineOptions({
    name: 'rule-edit'
});

const {options} = defineProps(['options']);

const types = [
    'string', 'number', 'boolean', 'method', 'regexp', 'integer', 'float',
    'array', 'object', 'enum', 'date', 'url', 'hex', 'email', 'pattern'
];

const handleAddFormValidate = () => {
    options.rules.push({
        id: generateUuid(),
        trigger: ['blur'],
        type: 'string',
        message: '',
        minlength: 0,
        maxlength: 0,
    })
    console.log('添加一条新的配置清单信息', options);
}

const handleDelete = (rule) => {
    options.rules = options.rules.filter(item => item.id !== rule.id)
};

</script>

<style scoped lang="scss">
.rule-item-list {
    @apply relative rounded border border-solid border-slate-300 hover:border-blue-500 cursor-pointer p-2 mb-5;

    .rule-item {
        @apply relative;

        &:only-child {
            @apply mb-0;
        }

        &:last-child {
            @apply mb-2;
        }
    }

    .delete-item {
        @apply hidden;
    }

    &:hover {
        .delete-item {
            border-top-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            right: -1px;
            z-index: 33;

            @apply absolute block bg-blue-500 p-1 top-0 text-xs text-white;
        }
    }
}


</style>