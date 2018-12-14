import axios from 'axios'
import { Message } from 'element-ui'
import Request from './request'
import Response from './response'

const requestConfig = {
  BASE_URL: 'http://api-fms-test.htw.link/',
  TIMEOUT: 30 * 1000
}
var service = axios.create({
  // baseURL: requestConfig.BASE_URL,
  timeout: requestConfig.TIMEOUT
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.method = 'POST'
    if (config.action) {
      config = Request.waybill(config)
    } else if (config.url) {
      config = Request.finance(config)
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    let res = response.data
    const config = response.config
    if (config.action) {
      res = Response.waybill(response.data, config)
    } else if (config.url) {
      res = Response.finance(response.data, config)
    }
    return res
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
