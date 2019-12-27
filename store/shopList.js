export const state = () => ({
  list: []
})

export const mutations = {
  set(state, list) {
    state.list = list
  },
  get(state) {
    return state.list
  }
}
