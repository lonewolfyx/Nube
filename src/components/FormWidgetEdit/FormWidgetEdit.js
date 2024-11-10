export const registerEditComponents = async () => {
    let editList = {};

    const modules = import.meta.glob('./**/*.vue', {eager: true});
    // const promises = [];
    // console.log(modules)
    for (const path in modules) {
        // console.log(modules[path].default)
        const componentName = modules[path].default.name.split('-')
            .map(name => name.charAt(0).toUpperCase() + name.slice(1))
            .join('');
        editList[componentName] = modules[path].default;
    }

    // console.log(editList)
    return editList;
};