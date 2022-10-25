import '@spectrum-web-components/slider/sp-slider-handle.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-slider-handle',
  name: 'VspSliderHandle',
  props: {
    label: String,
    max: String,
    min: String,
    name: String,
    slot: String,
    value: Number,
  },
})
