import '@spectrum-web-components/menu/sp-menu-item.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-menu-item',
  name: 'VspMenuItem',
  props: {
    disabled: Boolean,
    selected: Boolean,
    value: String,
  },
})
