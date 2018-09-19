<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Project Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="(data,index) in 5"
                        v-bind:key="index"
                        v-bind:id ="index"
                        @click ='showRelevantData'
                        >
                            Project #{{ data }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div v-if=init><Comp1 v-bind:ProjectData="init"></Comp1></div>
                <p v-else>Project Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Project are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Comp1 from "./Comp1.vue"
   export default{
       components: {
           'Comp1': Comp1,
       },
       data(){
           return{
               init: '',
               val:  ['Project 1 data','Project 2 data','Project 3 data','Project 4 data','Project 5 data'],
           }
       },
       methods:{
           showRelevantData: function(event){
                this.init = this.val[event.target.id]
           }
       }
   }
</script>

<style>
</style>
