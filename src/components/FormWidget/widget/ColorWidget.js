import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '取色器',
    type: 'color',
    icon: 'color',
    className: 'w-5 h-5',
    isChoose: false
}