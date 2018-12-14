const local = {
  setItem: function (key, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  getItem: function (key) {
    return JSON.parse(window.localStorage.getItem(key))
  },
  removeItem: function (key) {
    window.localStorage.removeItem(key)
  },
  clear: function () {
    window.localStorage.clear()
  }
}
const session = {
  setItem: function (key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  },
  getItem: function (key) {
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  removeItem: function (key) {
    window.sessionStorage.removeItem(key)
  },
  clear: function () {
    window.sessionStorage.clear()
  }
}

export { local, session }
