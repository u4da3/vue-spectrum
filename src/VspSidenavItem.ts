import '@spectrum-web-components/sidenav/sp-sidenav-item.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-sidenav-item',
  name: 'VspSidenavItem',
  props: {
    disabled: Boolean,
    expanded: Boolean,
    href: String,
    label: String,
    target: String,
    value: String,
  },
})
