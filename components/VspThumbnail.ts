import '@spectrum-web-components/thumbnail/sp-thumbnail.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-thumbnail',
  name: 'VspThumbnail',
  props: {
    background: String,
    cover: Boolean,
    focused: Boolean,
    selected: Boolean,
    size: String,
  },
})
