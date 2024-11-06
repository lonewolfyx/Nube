import {DatePicker, Input} from "ant-design-vue";

// 由于 Ant Design Vue 的组件前缀是 a- 与 Arco Vue 组件前端冲突，因此更改前缀
export default {
    install(app) {
        app.component('Antd-Input', Input);
        app.component('Antd-DatePicker', DatePicker);
    },
};