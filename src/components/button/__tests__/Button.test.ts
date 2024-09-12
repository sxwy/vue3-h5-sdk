import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button'

describe('attr', () => {
  test('class', () => {
    const wrapper = mount(Button)
    expect(wrapper.get('.sxwy-button').text()).toBe('按钮')
  })
})
