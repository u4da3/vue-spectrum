import '@spectrum-web-components/swatch/sp-swatch-group.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-swatch-group',
  name: 'VspSwatchGroup',
  props: {
    size: String,
    density: String,
    selects: Boolean,
    selected: Array<String>,
    shape: String,
  },
  emits: ['change'],
})
