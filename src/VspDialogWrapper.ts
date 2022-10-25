import '@spectrum-web-components/dialog/sp-dialog-wrapper.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-dialog-wrapper',
  name: 'VspDialgWrapper',
  props: {
    cancelLabel: String,
    confirmLabel: String,
    dismissable: Boolean,
    footer: String,
    headline: String,
    mode: String,
    secondaryLabel: String,
    underlay: Boolean,
  },
})
