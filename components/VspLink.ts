import '@spectrum-web-components/link/sp-link.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-link',
  name: 'VspLink',
  props: {
    download: String,
    href: String,
    overBackground: Boolean,
    quiet: Boolean,
    size: String,
    variant: String,
  },
})
