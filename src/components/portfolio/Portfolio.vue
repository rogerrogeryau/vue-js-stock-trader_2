<template>
    
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        <!--<h1 v-for="stock in stocks">{{stock}}</h1>-->
        
        <!--<h1>{{funds}}</h1>-->
    </div>
    
</template>


<script>
    import {mapGetters} from 'vuex'
    import Stock from './Stock.vue'
    export default {
        computed:{
            ...mapGetters({
                stocks:'stockPortfolio'
            })
        },
        components:{
            appStock:Stock
        }
    }
    
    
</script>