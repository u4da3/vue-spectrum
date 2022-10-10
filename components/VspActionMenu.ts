import '@spectrum-web-components/action-menu/sp-action-menu.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-action-menu',
  name: 'VspActionMenu',
  props: {
    size: String,
    selects: String,
    label: String,
  },
})
