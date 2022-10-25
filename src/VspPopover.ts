import '@spectrum-web-components/popover/sp-popover.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-popover',
  name: 'VspPopover',
  props: {
    dialog: Boolean,
    open: Boolean,
    placement: String,
    tip: Boolean,
    variant: String,
  },
})
