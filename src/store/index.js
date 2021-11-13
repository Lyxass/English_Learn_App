import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: "",
    inputParams: []
  },
  mutations: {
    setText(state, value){
      state.text = value
    },
    setInputParams(state, value){
      state.inputParams = value
    }
  },
  actions: {
  },
  modules: {
  }
})
