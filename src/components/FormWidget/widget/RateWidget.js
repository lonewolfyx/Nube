import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '评分',
    type: 'rate',
    icon: 'rate',
    className: 'w-5 h-5',
    isChoose: false
}