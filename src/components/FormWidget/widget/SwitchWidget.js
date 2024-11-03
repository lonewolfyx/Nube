import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '开关',
    type: 'switch',
    icon: 'switch',
    className: 'w-5 h-5',
    isChoose: false
}