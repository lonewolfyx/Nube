import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '时间选择器',
    type: 'time-picker',
    icon: 'time-picker',
    className: 'w-5 h-5',
    isChoose: false
}