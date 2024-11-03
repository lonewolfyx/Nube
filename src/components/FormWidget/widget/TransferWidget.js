import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '穿梭框',
    type: 'transfer',
    icon: 'transfer',
    className: 'w-5 h-5',
    isChoose: false
}