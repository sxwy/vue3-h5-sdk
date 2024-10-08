import type { AxiosInstance } from 'axios'
import { createHTTP } from './core'
import { getApiHost } from '../utils'
import { API_TYPE } from '../constants'

export let baseApi: AxiosInstance

export const createBaseApi = () => {
  baseApi = createHTTP({
    baseUrl: getApiHost(API_TYPE.BASE),
    header: { 'Content-Type': 'application/json' }
  })
}
