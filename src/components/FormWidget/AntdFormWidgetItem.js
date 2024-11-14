import {DatePicker, Form, FormItem, Input} from "ant-design-vue";

// 由于 Ant Design Vue 的组件前缀是 a- 与 Arco Vue 组件前端冲突，因此更改前缀
export default {
    install(app) {
        app.component('antd-form', Form);
        app.component('antd-form-item', FormItem);
        app.component('antd-input', Input);
        app.component('antd-datepicker', DatePicker);
    },
};