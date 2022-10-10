import '@spectrum-web-components/number-field/sp-number-field.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-number-field',
  name: 'VspNumberField',
  props: {
    value: Number,
    formatOptions: Object,
    size: String,
  },
})
