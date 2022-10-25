import '@spectrum-web-components/dialog/sp-dialog-base.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-dialog-base',
  name: 'VspDialgBase',
  props: {
    underlay: Boolean,
  },
})
