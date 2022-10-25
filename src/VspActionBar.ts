import '@spectrum-web-components/action-bar/sp-action-bar.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-action-bar',
  name: 'VspActionBar',
  props: {
    variant: String,
    open: Boolean,
  },
})
