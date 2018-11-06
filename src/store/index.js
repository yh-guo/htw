import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    sidebar
  }
})

export default store
