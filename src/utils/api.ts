import { ENV, API_TYPE } from '../constants'
import { h5SDKConfig } from '../config'

export const getApiHost = (type: API_TYPE) => {
  const HOST = {
    [API_TYPE.BASE]: {
      [ENV.MOCK]: `http://localhost:${h5SDKConfig.mockerPort}/${API_TYPE.BASE}`,
      [ENV.TEST]: 'http://test-api.xxx.cn',
      [ENV.RC]: 'https://rc-api.xxx.cn',
      [ENV.PROD]: 'https://api.xxx.cn'
    },
    [API_TYPE.WX]: {
      [ENV.MOCK]: `http://localhost:${h5SDKConfig.mockerPort}/${API_TYPE.WX}`,
      [ENV.TEST]: 'http://test-wx.xxx.cn',
      [ENV.RC]: 'https://rc-wx.xxx.cn',
      [ENV.PROD]: 'https://wx.xxx.cn'
    }
  }

  const apiHostObj: {
    [key: string]: string
  } = {
    [API_TYPE.BASE]: '',
    [API_TYPE.WX]: ''
  }

  switch (h5SDKConfig.env) {
    case ENV.MOCK:
      apiHostObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.MOCK]
      apiHostObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.MOCK]
      break
    case ENV.TEST:
      apiHostObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.TEST]
      apiHostObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.TEST]
      break
    case ENV.RC:
      apiHostObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.RC]
      apiHostObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.RC]
      break
    case ENV.PROD:
    default:
      apiHostObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.PROD]
      apiHostObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.PROD]
      break
  }
  return apiHostObj[type]
}
