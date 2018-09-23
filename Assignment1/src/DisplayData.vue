<template>
    <div class="row">
    <div><b>Item List: </b></div>
    <div class="items" v-for="(data,index) in listData" :id="index"  @click="handleData" >{{ data.list }}</div>
        <ProgressBar :Itemlist='listData'></ProgressBar>
    </div>
</template>

<script>
    import ProgressBar from  './ProgressBar.vue'
    export default {
        components: {
            'ProgressBar' : ProgressBar,
        },
        props: ['listData','deleteElementId'],
        methods:{
            deleteData: function(event){
                console.log('deleteData',event.target.id);
                this.deletedKeyId = event.target.id;
            },
            handleData: function(event){
                this.$emit('interface', event.target.id)
            },
        }
    };
</script>

<style>
    .mdiv{
        border: 1px solid grey;
        padding: 0;
        border-radius: 5px;
    }
    .items{
        background-color: white;
        padding: 8px;
        border-bottom: 1px solid grey;
        margin-bottom: 20px;
        box-shadow: 5px 5px black;
        font-size: 16px;
    }
</style>