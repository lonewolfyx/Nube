import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '图片',
    type: 'image',
    icon: 'image',
    className: 'w-5 h-5',
    isChoose: false
}