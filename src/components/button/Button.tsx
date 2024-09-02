import { defineComponent } from 'vue'
import { createComponentName } from '../../utils'
import Loading from '../loading'

export default defineComponent({
  name: createComponentName('button'),
  setup() {
    return () => {
      return (
        <>
          <Loading />
          <div class="sxwy-button">button</div>
        </>
      )
    }
  }
})
