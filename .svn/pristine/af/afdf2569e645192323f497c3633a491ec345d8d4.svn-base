import Vue from 'vue'
import Vuex from 'vuex'
import MUTATIONS from './common'
import { storeLocalStorage } from '@/utils'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    user: null,
    isLoading: false,
    isShowAppNavBar: true
  },
  mutations: {
    user (state, user) {
      if (user) {
        state.user = user
        storeLocalStorage(state)
      }
    },

    isLoading (state, value) {
      state.isLoading = value
    },

    isShowAppNavBar (state, value) {
      state.isShowAppNavBar = value
      storeLocalStorage(state)
    }
  },
  actions: {
    // 用户登录
    setUser: ({ commit }, user) => {
      commit(MUTATIONS.USER, user)
    },

    setLoading: ({ commit }, isLoading) => {
      commit(MUTATIONS.ISLOADING, isLoading)
    },

    setIsShowAppNavBar: ({ commit }, isShowAppNavBar) => {
      commit(MUTATIONS.ISSHOWAPPNAVBAR, isShowAppNavBar)
    }
  }
})

export default store
