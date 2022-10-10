import '@spectrum-web-components/divider/sp-divider.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-divider',
  name: 'VspDivider',
  props: {
    size: String,
    vertical: Boolean,
  },
})
