import { defineComponent } from 'vue'
import { createComponentName } from '../../utils'

export default defineComponent({
  name: createComponentName('button'),
  setup() {
    return () => {
      return (
        <>
          <div class="btn">123</div>
        </>
      )
    }
  }
})
