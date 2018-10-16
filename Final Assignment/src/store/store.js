import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import {addStocksRef} from '../components/user/firebase'

const store = new Vuex.Store({
  state: {
    userList: [{
      name: 'xx',
      value: 30,
      quantity: 1,
    }],
    totalAmt: 300,
    endpoint: 'saveStocksData.json'
  },
  getters: {
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    buyElement: (state, payload) => {
      state.userList.push(payload)
      console.log('userList',state.userList)
    },
    sellElement: (state, payload) => {
      
      console.log('sellElement',state.userList)
    },
    saveStocksdata: (state) => {
      
      console.log('saveStocksdata');
    endpoint: 'saveStocksData.json'
      Vue.http.post("https://vuejs-b3bce.firebaseio.com/"+state.endpoint,state.userList).then(
        response => {
          return response.json();
        },
        error => {
          console.log("error", error);
        }
      );

      console.log('tottt',state.userList)
      var totalvalueiteams=0;
      for(var i=0; i< state.userList.length; i++){
        console.log('cc', state.userList[i].quantity)
        console.log('mm', state.userList[i].value)
        totalvalueiteams += state.userList[i].quantity * state.userList[i].value
      }
      console.log('totalvalueiteams',totalvalueiteams)
      state.totalAmt = totalvalueiteams
    },
  },
  actions: {
    buy: (context, payload) => {
      context.commit("buyElement",payload);
    },
    sell: (context, payload) => {
      console.log('sell',payload)
      context.commit("sellElement",payload);
    },
    saveData: (context) => {
      context.commit("saveStocksdata");
      
    },
  }
});

export default store;