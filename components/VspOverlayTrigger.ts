import '@spectrum-web-components/overlay/overlay-trigger.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'overlay-trigger',
  name: 'VspOverlayTrigger',
  props: {
    placement: String,
    offset: String,
    type: String,
  },
})
