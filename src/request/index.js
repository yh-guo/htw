import axios from 'axios'
import config from 'config'
var service = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIMEOUT,
})

// request interceptor
service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
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
