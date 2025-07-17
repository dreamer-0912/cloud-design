// 默认的命名空间
export const defaultNamespace = 'cloud'

export const useNamespace = (name) => {
    const namespace = defaultNamespace
    return {
        namespace
    }
}
