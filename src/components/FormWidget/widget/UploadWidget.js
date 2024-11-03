import {generateUuid} from "@/util/util.js";

export default {
    id: generateUuid(),
    label: '上传',
    type: 'upload',
    icon: 'upload',
    className: 'w-5 h-5',
    isChoose: false
}