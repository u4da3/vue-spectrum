import '@spectrum-web-components/tooltip/sp-tooltip.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-tooltip',
  name: 'VspTooltip',
  props: {
    open: Boolean,
    placement: String,
    variant: String,
  },
})
