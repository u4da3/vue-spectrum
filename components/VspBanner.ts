import '@spectrum-web-components/banner/sp-banner.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-banner',
  name: 'VspBanner',
  props: {
    type: String,
    corner: Boolean,
  },
})
