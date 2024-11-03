import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '日期选择器',
    type: 'date-picker',
    icon: 'date-picker',
    className: 'w-5 h-5',
    isChoose: false
}