<template>
    <div class="row">
        <div class="col-md-12 mdiv">
            <div v-bind:style="getdivwidth()">
                <div class="progressBar">
                    {{Itemlist.length}}/12
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['Itemlist'],
        methods:{
            getdivwidth: function(){
            return {
                'width': (this.Itemlist.length*8.33) + '%',
                'background-color': 'orange'
            };
          }
        }
    };
</script>

<style>
    .progressBar{
        width: 100%;
        text-align: center;
        padding: 5px;
    }
</style>