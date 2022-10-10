import '@spectrum-web-components/button/sp-button.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-button',
  name: 'VspButton',
  props: {
    treatment: String,
    variant: String,
    label: String,
    disabled: Boolean,
    autofocus: Boolean,
  },
  emits: ['click'],
})
