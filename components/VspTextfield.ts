import '@spectrum-web-components/textfield/sp-textfield.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-textfield',
  name: 'VspTextfield',
  props: {
    grows: Boolean,
    invalid: Boolean,
    multiline: Boolean,
    placeholder: String,
    quiet: Boolean,
    valid: Boolean,
  },
})
