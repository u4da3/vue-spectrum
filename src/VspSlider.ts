import '@spectrum-web-components/slider/sync/sp-slider.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-slider',
  name: 'VspSlider',
  props: {
    disabled: Boolean,
    editable: Boolean,
    formatOptions: Object,
    hideStepper: Boolean,
    label: String,
    labelVisibility: String,
    max: Number,
    min: Number,
    step: Number,
    tickLabels: Boolean,
    tickStep: Number,
    value: Number,
    variant: String,
  },
})
