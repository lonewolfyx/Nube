import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '单选框',
    type: 'radio',
    icon: 'radio',
    className: 'w-5 h-5',
    isChoose: false
}