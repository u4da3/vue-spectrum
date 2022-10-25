import '@spectrum-web-components/field-label/sp-field-label.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-field-label',
  name: 'VspFieldLabel',
  props: {
    for: String,
    label: String,
    required: Boolean,
    sideAligned: String,
    size: String,
  },
})
