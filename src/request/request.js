import qs from 'qs'
import config from './config'
import { getUser } from '@/utils/user'
import Util from '@/utils/util'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64

const getUserInfo = function () {
  const userinfo = getUser()
  if (Util.isEmptyObject(userinfo)) {
    return false
  } else {
    return {
      userId: userinfo.userId,
      userToken: userinfo.userToken
    }
  }
}

export default {
  waybill (option) {
    let data = option.data
    const userinfo = getUserInfo()
    const timestamp = new Date().getTime()
    const appsecret = getUser().appSecret
    option.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    option.url = config.ACTION_URL + option.action
    if (userinfo) {
      data = Object.assign({}, userinfo, data)
    }
    const jsonString = Base64.encode(JSON.stringify(data))
    const sign = md5(jsonString + timestamp + appsecret)
    data = {jsonString, timestamp, sign}
    option.data = qs.stringify(data)
    return option
  },
  finance (option) {
    let data = option.data
    const userinfo = getUserInfo()
    option.url = config.FINANCE_URL + option.url
    if (userinfo) {
      data = Object.assign({}, userinfo, data)
    }
    option.data = data
    return option
  }
}
