import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations'

Vue.use(Vuex)

// 当用户关闭本地缓存 或 进行隐身模式，直接使用 localStroage 会出问题，使用 try catch 进行规范
// let defaultCity = '北京'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  state,
  actions: {
    // changeCity (ctx, city) {
    //   ctx.commit('changeCity', city)
    // }
  },
  mutations
})
