const element = import.meta.glob('./ElementWidget/*.vue');
const arco = import.meta.glob('./ArcoWidget/*.vue');

const registerComponents = (app, ui, widget) => {
    if (Object.keys(widget).length > 0) {
        for (const path in widget) {
            widget[path]().then((module) => {
                const uiName = ui.charAt(0).toUpperCase() + ui.slice(1)
                const componentName = uiName + path.split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
                    .split('-')
                    .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                    .join('');
                // console.log(componentName, module.default)
                app.component(componentName, module.default);
            });
        }
    }
}

export default {
    install(app) {
        // console.log(Object.keys(element).length)
        registerComponents(app, 'element', element);
        registerComponents(app, 'arco', arco);
    },
};