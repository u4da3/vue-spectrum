import '@spectrum-web-components/theme/sp-theme.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-theme',
  name: 'VspTheme',
  props: {
    theme: String,
    color: String,
    scale: String,
  },
})
