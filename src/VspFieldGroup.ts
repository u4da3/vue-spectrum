import '@spectrum-web-components/field-group/sp-field-group.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-field-group',
  name: 'VspFieldGroup',
  props: {
    horizontal: Boolean,
    label: String,
    vertical: Boolean,
  },
})
