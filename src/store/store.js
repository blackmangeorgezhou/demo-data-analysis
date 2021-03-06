import Vue from 'vue'
import Vuex from 'vuex'
import MUTATIONS from './common'
import { storeLocalStorage } from '@/utils'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    user: null,
    isLoading: false,
    isShowAppNavBar: true,
    permissionList: null,
    //菜单栏
    minLeftMenuWidth:64,
    maxLeftMenuWidth:160,
    minOpacity:0,
    maxOpacity:1,
    sidebar: {
        opened: true,  
        width: 160,
        opacity:1
    },
    isCollapse:false
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
    },
    handleLeftMenu (state) {
      if(state.sidebar.opened){//true
          state.sidebar.width = state.minLeftMenuWidth;
          state.sidebar.opacity = state.minOpacity;
      }else{
          state.sidebar.width = state.maxLeftMenuWidth;
          state.sidebar.opacity = state.maxOpacity;
      }
     state.sidebar.opened = !state.sidebar.opened
    },
    setLeftCollapse (state) {  
      state.isCollapse = !state.isCollapse 
    },
    permissionList: (state, value) => {
      if (value) {
        state.permissionList = value
        storeLocalStorage(state)
      }
    },
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
    },
    setLeftMenu:({ commit }) => {  
      commit(MUTATIONS.HANDLELEFTMENU)
    },
    setLeftCollapse:({ commit}) => {  
      commit(MUTATIONS.SETLEFTCOLLAPSE)  
    },
    // SideBar 路由
    setPermissionList: ({ commit }, permissions) => {
      commit(MUTATIONS.PERMISSIONLIST, permissions)
    },
  },
})

export default store
