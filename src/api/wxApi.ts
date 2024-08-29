import type { AxiosInstance } from 'axios'
import { createHTTP } from './core'
import { getApiHost } from '../utils'
import { API_TYPE } from '../constants'

export let wxApi: AxiosInstance

export const createWxApi = () => {
  wxApi = createHTTP({
    baseUrl: getApiHost(API_TYPE.WX),
    header: { 'Content-Type': 'application/json' }
  })
}
