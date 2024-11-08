export const registerEditComponents = async () => {
    let editList = {};

    const modules = import.meta.glob('./**/*.vue', {eager: true});
    // const promises = [];
    for (const path in modules) {
        // console.log(modules[path].default.__name)
        const componentName = modules[path].default.__name.split('-')
            .map(name => name.charAt(0).toUpperCase() + name.slice(1))
            .join('');
        editList[componentName] = modules[path].default;
        // }));
    }

    // await Promise.all(promises);
    // console.log(editList)
    return editList;
};