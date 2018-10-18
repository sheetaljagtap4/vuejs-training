<template>
    <div class="col-sm-12" >
        <div>
            <h2>Portfolio Data</h2>
            <div v-for="user in userList" class="portfolio_block col-sm-6">
                <portfoliolist :portfoliodata='user'></portfoliolist>
            </div>
        </div>
    </div>
</template>

<script>
import portfoliolist from './portfoliolist.vue';
export default {
    components: {
        'portfoliolist': portfoliolist
    },
    data() {
        return {
        userList: [],
        counterValue: 0,
        };
    },
    created(){
      this.$http.get("https://vuejs-b3bce.firebaseio.com/save.json").then(
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
          this.userList = tempArr;
      });
  },
   methods: {
        increment() {
            this.counterValue++;
        },
        decrement(){
            this.counterValue--;
        }
    }
}
</script>

<style>
    .portfolio_block{
        border:  2px solid grey;
        border-radius: 5px;
        padding: 15px;
    }
</style>
