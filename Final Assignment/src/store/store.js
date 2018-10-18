import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {addStocksRef} from '../components/user/firebase'

const store = new Vuex.Store({
  state: {
    userList: [],
    totalAmt: 300,
    totalvalueiteams: 0,
  },
  mutations: {
    buyElement: (state, payload) => {
      var newStateuserList = {...state.userList, name: payload.name, value: payload.value, quantity: payload.quantity }
      state.userList.push(newStateuserList)
    },
    sellElement: (state, payload) => {
      var afterDelete = state.userList.filter(function(el) { return el.name != payload.name; });
      state.userList = afterDelete;
      state.totalvalueiteams = state.totalvalueiteams-payload.quantity*payload.value;
      addStocksRef.child(payload.key).remove()
    },
    saveStocksdata: (state) => {
      addStocksRef.push(state.userList)
      var value = state.userList.length
      state.totalvalueiteams += state.userList[value-1].quantity * state.userList[value-1].value
    },
    changeStocksAmt: (state) => {
      var userListlength = state.userList.length;
      state.userList.map( function(x){
        return x['value'] = x['value']+Number(Math.random().toFixed(2))
      })
      addStocksRef.push(state.userList)
    },
  },
  actions: {
    buy: (context, payload) => {
      context.commit("buyElement", payload);
    },
    sell: (context, payload) => {
      console.log('sell',payload)
      context.commit("sellElement", payload);
    },
    saveData: (context) => {
      context.commit("saveStocksdata");
    },
    endDay: (context) => {
      context.commit("changeStocksAmt");
    },
  },
});

export default store;
