import '@spectrum-web-components/switch/sp-switch.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-switch',
  name: 'VspSwitch',
  props: {
    disabled: Boolean,
    emphasized: Boolean,
    label: String,
    value: String,
  },
  emits: ['click'],
})
