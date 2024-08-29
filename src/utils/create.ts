import { NAMESPACE } from '../constants'

/**
 * 创建组件名称
 * @param name
 * @returns
 */
export const createComponentName = (name: string) => {
  return `${NAMESPACE}-${name}`
}
