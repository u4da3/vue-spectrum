import '@spectrum-web-components/tags/sp-tag.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-tag',
  name: 'VspTag',
  props: {
    deletable: Boolean,
    disabled: Boolean,
    invalid: Boolean,
  },
})
