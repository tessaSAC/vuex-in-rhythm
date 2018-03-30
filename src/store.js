import Vue from 'vue'
import Vuex from 'vuex'
import location from './storeModules/location'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location
  }
})
