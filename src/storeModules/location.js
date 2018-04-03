// Getters
export const GET_LOCATION = 'GET_LOCATION'

// Actions
export const DISPATCH_LOCATION = 'DISPATCH_LOCATION'

// Mutations
export const COMMIT_LOCATION = 'COMMIT_LOCATION'

const state = {
  divLocation: ['80vh', '50vw']  // (y, x)
}

const getters = {
  [GET_LOCATION]: state => state.divLocation
}

const actions = {
  [DISPATCH_LOCATION]({ commit }, newLoc) {
    console.log('action', newLoc)
    commit(COMMIT_LOCATION, newLoc)
  }
}

const mutations = {
  [COMMIT_LOCATION](state, newLoc) {
    console.log(newLoc)
    state.divLocation = newLoc
  }
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced
}
