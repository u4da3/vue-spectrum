import '@spectrum-web-components/dialog/sp-dialog.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-dialog',
  name: 'VspDialog',
  props: {
    size: String,
    dismissable: Boolean,
    noDivider: Boolean,
  },
})
