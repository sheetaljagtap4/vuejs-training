<template>
    <div>
        <div class="col-sm-4 bold">
            <b>Name:</b> {{portfoliodata.name}} <br/>
            <b>Price:</b> {{portfoliodata.value}}  <br/>
            
        </div>
        <div class="col-sm-6">
            <b>Qunatity</b>
            <button class="btn btn-danger" v-on:click="increment">+</button>
                {{counterValue}}
            <button class="btn btn-danger" v-on:click="decrement">-</button>   
            
        </div>
        <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="buy(disp)">
                Buy
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ["portfoliodata"],
    data() {
        return {
        counterValue: 0,
        };
    },
    methods: {
        ...mapActions({
            buy: "buy",
        }),
        increment() { 
            this.counterValue++;
        },
        decrement(){
            this.counterValue--;
        },
       
    },
    computed:{
         disp(){
            return {
                name: this.portfoliodata.name,
                value: this.portfoliodata.value,
                quantity: this.counterValue
            }
        }
    }
}
</script>


