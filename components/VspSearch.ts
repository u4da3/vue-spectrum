import '@spectrum-web-components/search/sp-search.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-search',
  name: 'VspSearch',
  props: {
    disabled: Boolean,
    quiet: Boolean,
  },
})
