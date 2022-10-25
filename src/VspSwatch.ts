import '@spectrum-web-components/swatch/sp-swatch.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-swatch',
  name: 'VspSwatch',
  props: {
    border: String,
    color: String,
    disabled: Boolean,
    mixedValue: Boolean,
    nothing: Boolean,
    rounding: String,
    shape: String,
    size: String,
  },
})
