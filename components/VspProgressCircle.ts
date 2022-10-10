import '@spectrum-web-components/progress-circle/sp-progress-circle.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-progress-circle',
  name: 'VspProgressCircle',
  props: {
    indeterminate: Boolean,
    label: String,
    overBackground: Boolean,
    progress: Number,
    size: String,
  },
})
