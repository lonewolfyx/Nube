const element = import.meta.glob('./ElementWidget/*.vue')

export default {
    install(app) {
        // console.log(Object.keys(element).length)
        if (Object.keys(element).length > 0) {
            for (const path in element) {
                element[path]().then((module) => {
                    // const componentName = path.split('/').pop().replace(/\.\w+$/, '');
                    const componentName = 'Element' + path.split('/')
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
    },
};