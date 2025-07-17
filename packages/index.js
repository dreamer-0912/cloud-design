// 按需加载
export * from './components/index.js'
// 全局注册
import components from './components.js'

const install = (app) => {
    if (install.installed) return
    components.forEach(component => {
        app.use(component);
    });
}

export default install