import '@spectrum-web-components/avatar/sp-avatar.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-avatar',
  name: 'VspAvatar',
  props: {
    size: String,
    label: String,
    src: String,
  },
})
