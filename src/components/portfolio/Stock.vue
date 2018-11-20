<template>
    <!--<h1>Stock Component under stocks folder</h1>-->
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.stockName}}
                    <small>(Price: {{stock.stockPrice | currency}} | Quantity : {{stock.quantity}} )</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{danger:buttonDisabled || insufficientQuantity}"
                        >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        @click="sellStock_local" 
                        :disabled="buttonDisabled || insufficientQuantity"
                        >{{buttonDisabled || insufficientQuantity ? "CANT SELL" : "SELL"}}</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import {mapActions} from 'vuex';
    export default{ 
        props:['stock'],
        data(){
            return {
                quantity:0
            }
        },
        methods:{
           ...mapActions(['sellStock']),
           
           sellStock_local(){
               const order ={
                   stockID:this.stock.stockID,
                   stockPrice:this.stock.stockPrice,
                   quantity:this.quantity, 
                   stockName: this.stock.stockName
               };
               this.sellStock(order);   //call Action function
               this.quantity = 0;
           }
        },
        computed:{
            buttonDisabled: function(){
                return this.quantity <0 || !Number.isInteger(this.quantity) || this.stock.quantity < this.quantity ? true : false
            },
            insufficientQuantity(){
                return this.quantity>this.stock.quantity
            },
        }
    }
    
</script>


<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>