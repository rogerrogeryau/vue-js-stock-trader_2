<template>
    
    <div>
        <div class="col-sm-6 col-md-4">
            <h1>Trade or View your Portfolio</h1>
            <h6>you may save and load our data</h6>
            <h6>click on 'end day' to begin a new day!</h6>
            <hr>
            <p>Your Funds : {{funds | currency}}</p>
        </div>
    
    </div>
    
    
    
</template>


<script>
    export default {
        computed:{
            funds(){
                return this.$store.getters.funds;
                // return this.$store.getters.getStocks
            }
        }
    }
    
</script>