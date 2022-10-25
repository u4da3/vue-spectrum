import '@spectrum-web-components/split-view/sp-split-view.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-split-view',
  name: 'VspSplitView',
  props: {
    resizable: Boolean,
    primaryMin: Number,
    secondaryMin: Number,
    primarySize: Number,
    vertical: Boolean,
    scale: String,
  },
})
