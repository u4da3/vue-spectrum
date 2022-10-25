import '@spectrum-web-components/menu/sp-menu.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-menu',
  name: 'VspMenu',
  props: {
    label: String,
    selects: String,
    scale: String,
  },
  emits: ['change'],
})
