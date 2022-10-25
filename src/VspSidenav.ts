import '@spectrum-web-components/sidenav/sp-sidenav.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-sidenav',
  name: 'VspSidenav',
  props: {
    defaultValue: String,
    variant: String,
  },
})
