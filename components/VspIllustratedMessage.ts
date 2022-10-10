import '@spectrum-web-components/illustrated-message/sp-illustrated-message.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-illustrated-message',
  name: 'VspIllustratedMessage',
  props: {
    heading: String,
    description: String,
  },
})
