<template>
    <div class="col-sm-12 stocks_block">
        <div class="col-sm-4 bold">
            <b>Name:</b> {{stocksElement.name}} <br/>
            <b>Price:</b> {{stocksElement.value}}  <br/>
        </div>
        <div class="col-sm-3">
            <b>Qunatity</b>
                {{stocksElement.quantity}}
        </div>
        <div class="col-sm-3">
            <b>Total Price</b>
                {{stocksElement.value * stocksElement.quantity}}
        </div>
        <div class="col-sm-2">
            <button type="button" class="btn btn-primary" @click="sell(sellItem)" >
                Sell
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ["elementKey","stocksElement"],
    methods:{
      ...mapActions({
            sell: "sell",
        }),
    },
    computed:{
         sellItem(){
             return {
                name: this.stocksElement.name,
                key: this.elementKey,
                quantity: this.stocksElement.quantity,
                value: this.stocksElement.value,
            }
        }
    }
}
</script>

<style>
    .stocks_block{
        border:  2px solid grey;
        border-radius: 5px;
        padding: 15px;
    }
</style>


