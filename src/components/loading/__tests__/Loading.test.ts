import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import Loading from '../Loading'

describe('attr', () => {
  test('prop', () => {
    const wrapper = mount(Loading)
    expect(wrapper.classes()).toContain('sxwy-loading')
  })
})
