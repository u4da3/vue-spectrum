import '@spectrum-web-components/action-group/sp-action-group.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-action-group',
  name: 'VspActionGroup',
  props: {
    emphasized: Boolean,
    compact: Boolean,
    quiet: Boolean,
    vertical: Boolean,
    justified: Boolean,
    selects: String,
    label: String,
    selected: Array<String>,
  },
})
