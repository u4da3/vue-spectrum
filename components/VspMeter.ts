import '@spectrum-web-components/meter/sp-meter.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-meter',
  name: 'VspMeter',
  props: {
    overBackground: Boolean,
    progress: Number,
    sideLabel: Boolean,
    size: String,
  },
})
