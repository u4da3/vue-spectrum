import '@spectrum-web-components/icon/sp-icon.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-icon',
  name: 'VspIcon',
  props: {
    label: String,
    name: String,
    size: String,
    src: String,
  },
})
