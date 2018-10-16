<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <h1>Routing</h1>
                <header-component></header-component>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    
    import Header from './components/Header.vue';
    export default {
        components: {
            'header-component':  Header
        }
    }
</script>

<style>
</style>
