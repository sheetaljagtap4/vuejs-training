import {initializeApp} from 'firebase'

const app =  initializeApp({
    apiKey: "AIzaSyBFc6MW8-HkTkMy6whL8fuKch7K6rC8bNA",
    authDomain: "vuejs-b3bce.firebaseapp.com",
    databaseURL: "https://vuejs-b3bce.firebaseio.com",
    projectId: "vuejs-b3bce",
    storageBucket: "vuejs-b3bce.appspot.com",
    messagingSenderId: "715537672966"
})

export const db = app.database();
export const namesRef = db.ref('names');
export const addStocksRef = db.ref('saveStocks');
