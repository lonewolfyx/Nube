import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '分割线',
    type: 'divider',
    icon: 'divider',
    className: 'w-5 h-5',
    isChoose: false
}