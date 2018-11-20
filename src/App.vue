<template>
    <div class="container">
        <!--<app-home></app-home>-->
        <appHeader></appHeader>
        
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                
            </div>
        </div>

        
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    // import Home from './components/Home.vue';
    import axios from 'axios';
    export default {
        components:{
            appHeader:Header,
            // appHome:Home,
        },
        data(){
            return {
                // firebase_data:0
                
            }
        },
        created(){
            // $ dollar sign = stuff already access from main.js
            
            // trigger action method with dispatch
            // this.$store.dispatch('initStocks');    //already moved to axios get request function -- retrieve stocks from firebase
            

            // get firebase data
            // axios.get('/data.json')
            //   .then(function (response) {
            //     // handle success
            //     // console.log(response.data.funds);
            //     this.firebase_data = response.data
            //     // init funds
            //     // this.$store.dispatch('initFunds', response.data.funds)
            //     // return;
            //   })
            //   .catch(function (error) {
            //     // handle error
            //     console.log(error);
            //   })
            //   .then(function () {
            //     // always executed
            //   });
            
            
            
            axios.get('/data.json').then(response => {
                // this.firebase_data = response.data
                console.log(response.data)
                
                this.$store.dispatch('initFunds', response.data.funds)
                this.$store.dispatch('initPortfolio', response.data.stockPortfolio)
                this.$store.dispatch('initStocks', response.data.stocks);
            })

            // console.log(this.firebase_data)
            
            
            
            
        }
    }
</script>

<style>
    body{
        padding:20px;
    }
    
    .slide-enter-active{
        animation:slide-in 200ms ease-out forwards;
    }
    
    .slide-leave-active{
        animation:slide-out 200ms ease-out forwards;
    }
    
    @keyframes slide-in{
        from{
            transform:translateY(-30);
            opacity:0;
        }
        to{
            transform:translateY(0);
            opacity:1;
        }
    }
    
    @keyframes slide-out{
        from{
            transform:translateY(0);
            opacity:1;
        }
        to{
            transform:translateY(-30);
            opacity:0;
        }
    }
    
</style>
