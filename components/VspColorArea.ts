import '@spectrum-web-components/color-area/sp-color-area.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-color-area',
  name: 'VspColorArea',
  props: {
    labelX: String,
    labelY: String,
    disabled: Boolean,
  },
})
