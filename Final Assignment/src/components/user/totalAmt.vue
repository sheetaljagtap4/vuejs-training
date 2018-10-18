<template>
    <div class="align col-sm-2">
        <h3>Total amt {{ displayAmt }}</h3>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
           amount: 0,
        };
    },
    computed: {
        displayAmt(){
            if(this.$store.state.totalvalueiteams<0 || this.$store.state.totalvalueiteams>300){
              alert('You are exceeding the limit')
            }
            else{
              this.amount = this.$store.state.totalAmt-this.$store.state.totalvalueiteams
              return this.amount
            }
        }
    }
}
</script>

<style>
    div.align ,h3{
        float: right;
    }
</style>


