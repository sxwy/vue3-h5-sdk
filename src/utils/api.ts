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

  const typeObj: {
    [key: string]: string
  } = {
    [API_TYPE.BASE]: '',
    [API_TYPE.WX]: ''
  }

  switch (h5SDKConfig.env) {
    case ENV.MOCK:
      typeObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.MOCK]
      typeObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.MOCK]
      break
    case ENV.TEST:
      typeObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.TEST]
      typeObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.TEST]
      break
    case ENV.RC:
      typeObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.RC]
      typeObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.RC]
      break
    case ENV.PROD:
    default:
      typeObj[API_TYPE.BASE] = HOST[API_TYPE.BASE][ENV.PROD]
      typeObj[API_TYPE.WX] = HOST[API_TYPE.WX][ENV.PROD]
      break
  }
  return typeObj[type]
}
