import '@spectrum-web-components/color-wheel/sp-color-wheel.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-color-wheel',
  name: 'VspColorWheel',
  props: {
    disabled: Boolean,
  },
})
