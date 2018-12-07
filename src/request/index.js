import axios from 'axios'
// import requestConfig from 'requestConfig'
const requestConfig = {
  BASE_URL: 'http://api-fms-test.htw.link/api?action=',
  TIMEOUT: 30 * 1000
}
var service = axios.create({
  // baseURL: requestConfig.BASE_URL,
  timeout: requestConfig.TIMEOUT
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.action) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      config.url = requestConfig.BASE_URL + config.action
    }
    console.log(config)
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
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
