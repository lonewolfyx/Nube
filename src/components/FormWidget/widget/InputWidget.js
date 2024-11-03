import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '输入框',
    type: 'input',
    icon: 'input',
    className: 'w-5 h-5',
    isChoose: false,
    value: '',
    config: [
        {
            label: '标签文本',
            value: 'label',
            type: 'input',
            element: false,
        },
        {
            label: '表单域标签的位置',
            value: 'label-position',
        },
        {
            label: '标签宽度',
            value: 'label-width'
        },
        {
            label: '是否必填项',
            value: 'required'
        }
    ],
    rules: []
}