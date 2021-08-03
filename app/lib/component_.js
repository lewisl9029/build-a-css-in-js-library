import * as react_ from 'react'

export const createElement = (component, propsOrChildren, children) =>
  !propsOrChildren && !children
    ? react_.createElement(component)
    : Array.isArray(propsOrChildren)
    ? react_.createElement(component, {}, ...propsOrChildren)
    : children
    ? react_.createElement(component, propsOrChildren, ...children)
    : react_.createElement(component, propsOrChildren)

export { hooks } from '@lewisl9029/render-hooks'
