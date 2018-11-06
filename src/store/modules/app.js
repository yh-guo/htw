const sidebar = {
  namespaced: true,
  state: {
    opened: 0
  },
  mutations: {
    switchOpened: state => {
      state.opened++
    },
    closeOpened: state => {
      state.opened = 0
    }
  }
}

export default sidebar
