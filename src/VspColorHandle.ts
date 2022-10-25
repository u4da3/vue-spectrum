import '@spectrum-web-components/color-handle/sp-color-handle.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-color-handle',
  name: 'VspColorHandle',
  props: {
    disabled: Boolean,
    open: Boolean,
  },
})
