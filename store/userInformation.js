export const state = () => ({
  latitude: 0,
  longitude: 0
})

export const mutations = {
  setLatitude(state, latitude) {
    state.latitude = latitude
  },
  setLongitude(state, longitude) {
    state.longitude = longitude
  }
}
