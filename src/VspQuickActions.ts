import '@spectrum-web-components/quick-actions/sp-quick-actions.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-quick-actions',
  name: 'VspQuickActions',
  props: {
    textOnly: Boolean,
    opened: Boolean,
    label: String,
  },
})
