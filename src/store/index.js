import Vue from 'vue'
import Vuex from 'vuex'
import User from './User';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalAddState: false,
    modalEditState:false,
    modalDeleteState:false,
  },
  mutations: {
    modalAdd_State(state, value) {
      state.modalAddState = value;
    },
    modalEdit_State(state,value){
      state.modalEditState = value;
    },
    modalDelete_State(state,value){
      state.modalDeleteState = value;
    }
  },
  actions: {
  },
  modules: {
      User
  }
})
