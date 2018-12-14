import { local } from './storage'
import Crypt from './crypto'
const UserKey = 'HTW-User'
export function getUser () {
  let user = '{}'
  let localInfo = local.getItem(UserKey)
  user = localInfo ? Crypt.Decrypt(localInfo) : user
  return JSON.parse(user)
}

export function setUser (info) {
  info = Crypt.Encrypt(JSON.stringify(info))
  return local.setItem(UserKey, info)
}

export function removeUser () {
  return local.removeItem(UserKey)
}
