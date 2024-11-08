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
        placeholder: '请输入......',
        value: '',
        maxlength: 0,
        minlength: 0,
        clearable: false,
        disabled: false,
        size: 'default',
        showPassword: false,
        labelPosition: '',
        labelWidth: ''
    }
}