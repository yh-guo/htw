const util = {
  isEmptyObject (obj) {
    for (var key in obj) {
      return false
    }
    return true
  }
}

export default util
