import '@spectrum-web-components/coachmark/sp-coachmark.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-coachmark',
  name: 'VspCoachmark',
  props: {
    variant: String,
    quiet: Boolean,
  },
})
