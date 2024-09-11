import { defineComponent } from 'vue'
import { createComponentName } from '../../utils'

export default defineComponent({
  name: createComponentName('loading'),
  setup() {
    return () => {
      return <div class="sxwy-loading">loading</div>
    }
  }
})
