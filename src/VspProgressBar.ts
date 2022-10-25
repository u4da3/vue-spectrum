import '@spectrum-web-components/progress-bar/sp-progress-bar.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-progress-bar',
  name: 'VspProgressBar',
  props: {
    ariaLabel: Boolean,
    indeterminate: Boolean,
    label: String,
    overBackground: Boolean,
    progress: Number,
    sideLabel: Boolean,
    size: String,
  },
})
