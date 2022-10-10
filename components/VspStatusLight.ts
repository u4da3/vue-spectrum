import '@spectrum-web-components/status-light/sp-status-light.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-status-light',
  name: 'VspStatusLight',
  props: {
    size: String,
    variant: String,
    disabled: Boolean,
  },
})
