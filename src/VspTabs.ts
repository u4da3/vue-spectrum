import '@spectrum-web-components/tabs/sp-tabs.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-tabs',
  name: 'VspTabs',
  props: {
    direction: String,
    selected: String,
  },
})
