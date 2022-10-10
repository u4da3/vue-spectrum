import '@spectrum-web-components/toast/sp-toast.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-toast',
  name: 'VspToast',
  props: {
    open: Boolean,
    variant: String,
  },
})
