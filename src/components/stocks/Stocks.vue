<template>
    <!--<h1>Stocks Component under stocks folder</h1>-->
    <div>
        <!--<ul>-->
            <!--<li v-for="stock in stocks">{{stock}}</li>-->
        <!--</ul>-->
        <app-stock v-for="stock in existing_stocks" :stock="stock"></app-stock>
    </div>
    
</template>


<script>
    import Stock from './Stock.vue'
    export default {
        components:{
          appStock:Stock  
        },
        computed:{
            existing_stocks(){
                return this.$store.getters.getStocks;
            }
        }
        // data:function(){
        //     return {
        //         stocks:[
        //             {id:1, name:'BMW', price:40},
        //             {id:2, name:'APPL', price:47},
        //             {id:3, name:'AMZ', price:20},
        //             {id:4, name:'SNP', price:48},
        //             // {id:5, name:'Kristy TAN', price:999999999999}
        //         ]
        //     }
        // }
    }
    
</script>