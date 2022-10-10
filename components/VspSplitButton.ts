import '@spectrum-web-components/split-button/sp-split-button.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-split-button',
  name: 'VspSplitButton',
  props: {
    left: Boolean,
    size: String,
    type: String,
    variant: String,
  },
})
