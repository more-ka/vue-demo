import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'nick'
  },
  getters: {
    firstLetter: (state) => {
      return state.userName.slice(-1)
    }
  },
  mutations: {
    // 第一种方法
    // CHANGE_USER_NAME (state) {
    //   state.userName = 'Richard'
    // }
    // 第二种方法
    // CHANGE_USER_NAME (state, params) {
    //   state.userName = params.newUserName
    // }
    // 第三种方法
    CHANGE_USER_NAME (state, params) {
      state.userName = params.newUserName
    },
    SET_NEW_VALUE (state) {
      Vue.set(state, 'newValue', 'newValue')
    }
  },
  actions: {
  },
  modules: {
  }
})
