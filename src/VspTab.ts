import '@spectrum-web-components/tabs/sp-tab.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-tab',
  name: 'VspTab',
  props: {
    label: String,
    value: String,
    vertical: Boolean,
  },
})
