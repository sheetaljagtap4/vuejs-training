<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <!-- Hint - Think about native addEventListener -->
            </div>
         </div>
        <div v-custom-on:click="display" class="comp">------ Click Here ------- </div>
    </div>
</template>

<script>
    export default {
        methods:{
            display: function(){
                alert('Its custom directive');
            }
        },
        directives:{
            'custom-on':{
                bind(el,binding,vnode){
                    el.style.backgroundColor ='pink';
                    if(binding.arg == 'click'){
                        el.addEventListener("click", function(){
                            binding.value();
                        });
                    }
                }
            }
        }
    }
</script>

<style>
.comp{
    text-align: center;
}
</style>
