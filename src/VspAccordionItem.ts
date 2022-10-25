import '@spectrum-web-components/accordion/sp-accordion-item.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-accordion-item',
  name: 'VspAccordionItem',
  props: {
    label: String,
    disabled: Boolean,
    open: Boolean,
  },
})
