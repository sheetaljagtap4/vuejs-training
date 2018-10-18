<template>
    <div class="col-sm-12">
        <h2>Total stocks data</h2>
        <div v-for="element in showStocks[showStocks.length-1]['.value']" class="col-sm-6" >
            <stockslist :stocksElement='element' :elementKey="showStocks[showStocks.length-1]['.key']"></stockslist>
        </div>
    </div>
</template>

<script>
import {addStocksRef} from './firebase'
import stockslist from './stockslist.vue';

export default {
    data() {
      return {
          list: [],
          dataToSend: []
      };
    },
    firebase:{
      showStocks: addStocksRef,
    },
    components: {
        'stockslist': stockslist
    },
}
</script>

<style>
    .stocks{
        border: 1px solid red;
        border-radius: 5px;
        padding: 15px;
    }
</style>


