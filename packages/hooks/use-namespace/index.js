// 默认的命名空间
export const defaultNamespace = 'cloud'


const bem = ({ namespace, block, element, modifierAttr, modifierValue }) => {
    // block
    let className = `${namespace}-${block}`
    // element
    element && (className += `__${element}`)
    // modifier
    modifierAttr && (className += `--${modifierAttr}`)
    modifierValue && (className += `_${modifierValue}`)
    return className
}

export const useNamespace = (block) => {
    const namespace = defaultNamespace
    // block
    const b = () => bem({ namespace, block })
    // element
    const e = (element) => element ? bem({ namespace, block, element }) : ''
    // modifier
    const m = (modifierAttr, modifierValue) => modifierAttr ? bem({ namespace, block, modifierAttr, modifierValue }) : ''
    // is
    const is = (name, status) => name && status ? `is-${name}` : ''
    return {
        namespace,
        b,
        e,
        m,
        is
    }
}
