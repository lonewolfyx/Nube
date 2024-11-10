import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '输入框',
    type: 'input',
    icon: 'input',
    className: 'w-5 h-5',
    isChoose: false,
    value: '',
    config: {
        inputType: 'text',
        label: '输入框',
        prop: '',
        placeholder: '请输入......',
        value: '',
        minlength: 0,
        maxlength: 0,
        clearable: false,
        disabled: false,
        size: 'default',
        showPassword: false,
        labelPosition: '',
        labelWidth: ''
    },
    rule: {
        required: false,
        trigger: ['blur'],
        type: 'string',
        message: '',
        minlength: 0,
        maxlength: 0,
        lengthMessage: '',
        rules: []
    }
}