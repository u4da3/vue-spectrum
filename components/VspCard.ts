import '@spectrum-web-components/card/sp-card.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-card',
  name: 'VspCard',
  props: {
    alt: String,
    asset: String,
    heading: String,
    href: String,
    size: String,
    src: String,
    subheading: String,
    target: String,
  },
})
