import '@spectrum-web-components/help-text/sp-help-text.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-help-text',
  name: 'VspHelpText',
  props: {
    disabled: Boolean,
    icon: Boolean,
    size: String,
    variant: String,
  },
})
