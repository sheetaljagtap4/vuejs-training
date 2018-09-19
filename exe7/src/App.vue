<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p> 1. Pass some text to the 3 components but not using props </p>
                <app-orange>This is Orange</app-orange>
                <app-black>This is black</app-black>
                <app-red>This is red</app-red>

                <p> 2. Dynamically switching the components using buttons </p>
                <br>
                <button class="btn btn-default" @click="displayComponent='app-orange'">Load Orange Template</button>
                <button class="btn btn-default" @click="displayComponent='app-black'">Load Black Template</button>
                <button class="btn btn-default" @click="displayComponent='app-red'">Load Red Template</button>
                <hr>
                    <component v-bind:is="displayComponent"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Orange from './components/Orange.vue';
    import Black from './components/Black.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appOrange: Orange,
            appBlack: Black,
            appRed: Red
        },
        data: function(){
            return{
                displayComponent: ''
            }
        }
    }
</script>

<style>
</style>
