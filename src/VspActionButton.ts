import '@spectrum-web-components/action-button/sp-action-button.js'
import { vspWarpper } from './VspWrapper'

export default vspWarpper({
  tag: 'sp-action-button',
  name: 'VspActionButton',
  props: {
    disabled: Boolean,
    emphasized: Boolean,
    holdAffordance: Boolean,
    quiet: Boolean,
    selected: Boolean,
    size: String,
    toggles: Boolean,
  },
  emits: ['click'],
})
