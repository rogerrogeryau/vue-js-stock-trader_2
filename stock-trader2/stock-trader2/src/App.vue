<template>
    <div class="container">
        <!--<app-home></app-home>-->
        <appHeader></appHeader>
        
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>

        
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    // import Home from './components/Home.vue';
    export default {
        components:{
            appHeader:Header,
            // appHome:Home,
        },
        created(){
            // $ dollar sign = stuff already access from main.js
            
            // trigger action method with dispatch
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body{
        padding:20px;
    }
</style>
