import { defineComponent, type PropType, type ExtractPropTypes } from 'vue'
import { createComponentName } from '../../utils'
import Loading from '../loading'

export const buttonProps = {
  /**
   * 标签
   */
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  },
  /**
   * 文案
   */
  text: {
    type: String,
    default: '按钮'
  },
  /**
   * 是否展示 loading
   */
  showLoading: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export default defineComponent({
  name: createComponentName('button'),
  props: buttonProps,
  setup(props) {
    return () => {
      return (
        <>
          {props.showLoading && <Loading />}
          <props.tag class="sxwy-button">{props.text}</props.tag>
        </>
      )
    }
  }
})
