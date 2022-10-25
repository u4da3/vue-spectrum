import '@spectrum-web-components/tabs/sp-tab-panel.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-tab-panel',
  name: 'VspTabPanel',
  props: {
    value: String,
  },
})
