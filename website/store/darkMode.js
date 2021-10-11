export const state = () => ({
  isEnabled: false,
})

export const mutations = {
  enable(state) {
    state.isEnabled = true
    document.documentElement.classList.add("dark");
  },
  disable(state) {
    state.isEnabled = false
    document.documentElement.classList.remove("dark");
  },
  toggle(state) {
    state.isEnabled ? mutations.disable(state) : mutations.enable(state)
  },
}
