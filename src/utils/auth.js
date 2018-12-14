import { local } from '@/utils/storage'
const TokenKey = 'HTW-Token'

export function getToken () {
  return local.getItem(TokenKey)
}

export function setToken (token) {
  return local.setItem(TokenKey, token)
}

export function removeToken () {
  return local.removeItem(TokenKey)
}
