import '@spectrum-web-components/color-slider/sp-color-slider.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-color-slider',
  name: 'VspColorSlider',
  props: {
    vertical: Boolean,
    disabled: Boolean,
  },
})
