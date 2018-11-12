<template>
    <!--<h1>Stock Component under stocks folder</h1>-->
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.stockName}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success" @click="buyStock" :disabled="buttonDisabled">Buy</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    export default{
        props:['stock'],
        data(){
            return {
                quantity:0
            }
        },
        methods:{
            buyStock(){
                // alert(this.stock.name)
                let buyOrder = {
                    stockID:this.stock.stockID,
                    stockName:this.stock.stockName,
                    quantity:this.quantity
                }
                
                console.log(buyOrder)
                this.$store.dispatch('buyStock', buyOrder)
                this.quantity = 0;
                
            }
        },
        computed:{
            buttonDisabled: function(){
                return this.quantity <=0 || !Number.isInteger(this.quantity) ? true : false
            }
        }
    }
    
</script>