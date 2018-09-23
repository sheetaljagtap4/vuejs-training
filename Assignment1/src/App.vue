<template>
    <div class="container-fluid well halfwidth">
        
        <div class="row">
            <div class="form-group col-md-4 col-md-offset-4">
                <h2>TODO List App</h2>
                <input type="text" class="form-control" id="usr" v-on:keyup.enter="display"/>
                <DisplayData :listData="items" :deleteElementId="deletedKeyId" @interface="handleData"></DisplayData>
            </div>
        </div>
    </div>
</template>

<script>
    import DisplayData from  './DisplayData.vue'
    export default {
        components: {
            'DisplayData' : DisplayData,
        },
        data(){
            return{
                items: [],
                counter: 0,
                deletedKeyId :'',
            }
        },
        methods:{
            display: function(event){
                if(this.items.length<12){
                     this.obj ={};
                    this.obj.list = event.target.value;
                    this.obj.id = this.counter++;
                    this.items.push(this.obj);
                }
               else{
                   alert('Yo can not add more than 12 items. Delete from existing list')
               }
            },
            handleData: function(id){
                this.items.splice(id, 1);
            }
        },
    }
</script>

<style>
    h3{
        text-align: center;
        color: red;
    }
    input{
        height:  50px;
        border-bottom: grey;
        margin-bottom: 20px;
    }
</style>
