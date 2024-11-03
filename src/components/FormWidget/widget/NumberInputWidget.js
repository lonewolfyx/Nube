import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '数字输入框',
    type: 'number-input',
    icon: 'number-input',
    className: 'w-5 h-5',
    isChoose: false
}