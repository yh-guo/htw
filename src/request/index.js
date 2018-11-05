import axios from 'axios'
import config from 'config'
var service = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIMEOUT,
})

// service.


export default service
