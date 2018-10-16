<template>
    <div class="align col-sm-2">
        <h3>Total amt {{ eee }}</h3>
    </div>
    
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
           
        };
    },
    methods: {
        
    },
    computed: {
        eee(){
            return this.$store.state.totalAmt
        }
    }
    
}
</script>

<style>
    div.align ,h3{
        float: right;
    }    
</style>


