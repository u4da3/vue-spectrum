import '@spectrum-web-components/color-loupe/sp-color-loupe.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-color-loupe',
  name: 'VspColorLoupe',
  props: {
    labelX: String,
    labelY: String,
    disabled: Boolean,
  },
})
