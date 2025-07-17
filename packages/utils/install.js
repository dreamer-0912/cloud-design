/**
 * 组件安装
 * @param {*} component  组件对象
 * @returns 
 */
export const componentInstall = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
}