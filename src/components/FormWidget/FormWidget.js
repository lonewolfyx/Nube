import {generateUuid} from "@/util/util.js";
import InputWidget from "@/components/FormWidget/widget/InputWidget.js";
import TextareaWidget from "@/components/FormWidget/widget/TextareaWidget.js";

export default [
    InputWidget,
    TextareaWidget,

    {
        id: generateUuid(),
        label: '单选框',
        type: 'radio',
        icon: 'radio',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '多选框',
        type: 'checkbox',
        icon: 'checkbox',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '评分',
        type: 'rate',
        icon: 'rate',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '下拉选择器',
        type: 'select',
        icon: 'select',
        className: 'w-5 h-5',
        isChoose: false
    },


    {
        id: generateUuid(),
        label: '滑块',
        type: 'slider',
        icon: 'slider',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '开关',
        type: 'switch',
        icon: 'switch',
        className: 'w-5 h-5',
        isChoose: false
    },


    {
        id: generateUuid(),
        label: '日期选择器',
        type: 'date-picker',
        icon: 'date-picker',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '时间选择器',
        type: 'time-picker',
        icon: 'time-picker',
        className: 'w-5 h-5',
        isChoose: false
    },


    {
        id: generateUuid(),
        label: '数字输入框',
        type: 'number-input',
        icon: 'number-input',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '取色器',
        type: 'color',
        icon: 'color',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '上传',
        type: 'upload',
        icon: 'upload',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '穿梭框',
        type: 'transfer',
        icon: 'transfer',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '头像',
        type: 'avatar',
        icon: 'avatar',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '日历',
        type: 'calendar',
        icon: 'calendar',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '图片',
        type: 'image',
        icon: 'image',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '标签',
        type: 'tag',
        icon: 'tag',
        className: 'w-5 h-5',
        isChoose: false
    },
    {
        id: generateUuid(),
        label: '分割线',
        type: 'divider',
        icon: 'divider',
        className: 'w-5 h-5',
        isChoose: false
    }
]