<template>
    <div class="col-sm-12">
        <h2>Total stocks data</h2>
       
        <div v-for="element in this.list[this.list.length-1]" class="col-sm-6">
        
            <stockslist :stocksElement='element'></stockslist>
        </div>
    </div>
</template>

<script>
import stockslist from './stockslist.vue';

export default {
    components: {
        'stockslist': stockslist
    },
    data() {
        return {
            list: [],
            dataToSend: []
        };
    },
    computed:{
       
    },
    created(){
        this.$http.get("https://vuejs-b3bce.firebaseio.com/saveStocksData.json").then(
        response => {
          return response.json();
        },
        error => {
          console.log("error", error);
        }
      ).then(data => {
          let tempArr = [];
          for(let key in data) {
              tempArr.push(data[key]);
          }
          this.list = tempArr;
          console.log('addeddata',this.list)
      });
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


