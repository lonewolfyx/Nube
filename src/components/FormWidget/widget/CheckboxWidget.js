import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '多选框',
    type: 'checkbox',
    icon: 'checkbox',
    className: 'w-5 h-5',
    isChoose: false
}