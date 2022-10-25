import '@spectrum-web-components/picker/sp-picker.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-picker',
  name: 'VspPicker',
  props: {
    size: String,
    label: String,
    value: String,
    quiet: Boolean,
    disabled: Boolean,
  },
})
