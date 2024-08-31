import { defineComponent } from 'vue'
import { createComponentName } from '../../utils'
import Loading from '../loading'

export default defineComponent({
  name: createComponentName('button'),
  setup() {
    return () => {
      return (
        <>
          <div class="btn loading">button</div>
          <Loading />
        </>
      )
    }
  }
})
