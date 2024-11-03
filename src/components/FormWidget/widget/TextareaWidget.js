import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '多行输入框',
    type: 'textarea',
    icon: 'multi-line',
    className: 'w-5 h-5',
    isChoose: false
}