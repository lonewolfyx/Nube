import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '下拉选择器',
    type: 'select',
    icon: 'select',
    className: 'w-5 h-5',
    isChoose: false
}