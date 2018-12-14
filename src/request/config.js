export default {
  ACTION_URL: 'http://api-fms-test.htw.link/api?action=',
  FINANCE_URL: 'http://172.18.166.202:9999/api/',
  TIMEOUT: 30 * 1000,
  ERROR_CODE: {
    loginExpireStatus: 'E0001', // 登录超时
    apiExpireStatus: 'E0002' // 签名失效
  }
}
