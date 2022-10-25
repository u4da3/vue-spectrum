import '@spectrum-web-components/checkbox/sp-checkbox.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-checkbox',
  naeme: 'VspCheckbox',
  props: {
    size: String,
    checked: Boolean,
    indeterminate: Boolean,
    invalid: Boolean,
    disabled: Boolean,
    emphasized: Boolean,
  },
  emits: ['change'],
})
