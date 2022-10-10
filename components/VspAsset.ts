import '@spectrum-web-components/asset/sp-asset.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-asset',
  name: 'VspAsset',
  props: {
    variant: String,
    label: String,
  },
})
