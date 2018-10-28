import Vuex from 'vuex';
import modules from './modules';

const createStore = () => {
  return new Vuex.Store({
    modules
  })
}

export default createStore

// export const state = () => ({
//   sidebar: false,
//   counter: 0
// })

// export const mutations = {
//   toggleSidebar (state) {
//     state.sidebar = !state.sidebar
//   },
//   increment (state) {
//     state.counter++
//   }
// }
