export const state = () => {
  return {
    user: undefined
  }
}

export const mutations = {
  PostUserData (state, data) {
    state.user = data
  }
}
