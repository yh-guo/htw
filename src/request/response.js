import { Message } from 'element-ui'
import config from './config'
import { removeUser } from '@/utils/user'

export default {
  waybill (res, option) {
    if (option.filter) { // 不做统一处理
      return res
    } else { // 统一处理异常
      if (res.isSuccess) {
        return res
      } else {
        switch (res.status) {
          case config.ERROR_CODE.loginExpireStatus: // 登录超时
            removeUser()
            break
        }
        Message({
          showClose: true,
          message: res.description
        })
        return Promise.reject(res.description)
      }
    }
  },
  finance (res, option) {
    return res
  }
}
