import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录状态
    isLogin:false,
    // 登录信息凭证
    userToken:"",
    isDetail: false,
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
