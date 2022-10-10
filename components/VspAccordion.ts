import '@spectrum-web-components/accordion/sp-accordion.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-accordion',
  name: 'VspAccordion',
  props: {
    allowMultiple: Boolean,
  },
})
