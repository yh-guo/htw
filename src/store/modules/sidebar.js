const sidebar = {
  namespaced: true,
  state: {
    opened: 0,
    openedAll: 0
  },
  mutations: {
    openMenu: state => {
      state.opened = 1
    },
    closeMenu: state => {
      state.opened = 0
    },
    openMenuAll: state => {
      state.openedAll = 1
    },
    closeMenuAll: state => {
      state.openedAll = 0
    }
  }
}

export default sidebar
