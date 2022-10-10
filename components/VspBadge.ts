import '@spectrum-web-components/badge/sp-badge.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-badge',
  name: 'VspBadge',
  props: {
    size: String,
    variant: String,
  },
})
