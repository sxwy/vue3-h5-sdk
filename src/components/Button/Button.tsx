import { defineComponent } from 'vue'
import { createComponentName } from '../../utils'

export default defineComponent({
  name: createComponentName('button'),
  setup() {
    return () => {
      return (
        <>
          <div
            class="btn btn1"
            style="color: blue"
            onClick={() => {
              console.log(123)
            }}
          >
            123
          </div>
        </>
      )
    }
  }
})
