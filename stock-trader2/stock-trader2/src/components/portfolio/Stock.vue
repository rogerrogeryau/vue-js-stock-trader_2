<template>
    <!--<h1>Stock Component under stocks folder</h1>-->
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.stockName}}
                    <small>(Price: {{stock.price}} | Quantity : {{stock.quantity}} )</small>
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
                        class="btn btn-success"
                        @click="sellStock" 
                        :disabled="buttonDisabled"
                        >Sell</button>
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
           sellStock(){
               const order ={
                   stockID:this.stock.stockID,
                   stockPrice:this.stock.price,
                   quantity:this.quantity
               };
               this.sellStock();
               
           }
        },
        computed:{
            buttonDisabled: function(){
                return this.quantity <=0 || !Number.isInteger(this.quantity) ? true : false
            }
        }
    }
    
</script>