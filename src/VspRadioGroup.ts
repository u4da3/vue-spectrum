import '@spectrum-web-components/radio/sp-radio-group.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-radio-group',
  name: 'VspRadioGroup',
  props: {
    vertical: Boolean,
    name: String,
    selected: String,
    horizontal: Boolean,
  },
})
