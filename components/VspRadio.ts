import '@spectrum-web-components/radio/sp-radio.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-radio',
  name: 'VspRadio',
  props: {
    checked: Boolean,
    disabled: Boolean,
    invalid: Boolean,
    value: String,
  },
  emits: ['change'],
})
