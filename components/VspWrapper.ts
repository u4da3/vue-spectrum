import {
  h,
  VNode,
  cloneVNode,
  defineComponent,
  ComponentPropsOptions,
  ComponentPublicInstance,
  mergeProps,
  ComponentOptionsWithObjectProps,
  ComponentOptionsMixin,
  EmitsOptions,
  Text,
} from 'vue'
import { hyphenate, camelize, capitalize } from '@vue/shared'
import { SpCustomElements } from '../SpCustomElements'

export function vspHandlers(events: string[] = [], emitFunc: (event: string, ...args: any[]) => void) {
  const handlers = {} as { [key: string]: (event: Event) => void }
  for (let eventName of events) {
    const handlerName = 'on' + capitalize(camelize(eventName))
    handlers[handlerName] = function (event: Event) {
      emitFunc(eventName, event)
      return false
    }
  }
  return handlers
}

export function vspRender(tag: string, events: string[] = []) {
  return function (this: ComponentPublicInstance) {
    const props = mergeProps(this.$props, vspHandlers(events, this.$emit))
    const children = [] as VNode[]
    for (let slotName of Object.keys(this.$slots)) {
      const slot = this.$slots[slotName]
      const slotValue = slotName === 'default' ? undefined : hyphenate(slotName)
      if (slot) {
        const vnodes = slot().map(vnode => (vnode.type === Text ? h('span', null, vnode) : vnode))
        const chide =
          1 === vnodes.length ? cloneVNode(vnodes[0], { slot: slotValue }) : h('div', { slot: slotValue }, vnodes)
        children.push(chide)
      }
    }
    return h(tag, props, children)
  }
}

export function vspWarpper<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  E extends EmitsOptions = {},
  EE extends string = string
>(
  options: ComponentOptionsWithObjectProps<
    PropsOptions,
    unknown,
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    E,
    EE
  > & { tag: string; emits?: string[] }
) {
  return defineComponent({
    name: options.name,
    props: options.props,
    emits: options.emits,
    // compilerOptions: {
    //   isCustomElement(tag: string) {
    //     return SpCustomElements.includes(tag)
    //   },
    // },
    render: vspRender(options.tag, options.emits),
  })
}
