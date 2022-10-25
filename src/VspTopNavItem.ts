import '@spectrum-web-components/top-nav/sp-top-nav-item.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-top-nav-item',
  name: 'VspTopNavItem',
  props: {
    href: String,
    label: String,
    scale: String,
    placement: String,
  },
})
