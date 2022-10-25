import '@spectrum-web-components/dropzone/sp-dropzone.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-dropzone',
  name: 'VspDropzone',
  props: {
    dragged: Boolean,
  },
  emits: ['drop', 'dragover', 'dragleave'],
})
