<template>
    
    <div>

        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                </div>
        
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                        
                    </ul>
                    <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click="endDay">End Day</a></li>
                        <li
                                class="dropdown" :class="{open:dropDownOpen}">
                            <a
                                    href="#"
                                    class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    @click="dropDownOpen = !dropDownOpen"
                                    >Save & Load <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="saveData">Save Data</a></li>
                                <li><a href="#">Load Data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>

    </div>


</template>


<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import axios from 'axios';
    export default {
        data(){
            return {
                dropDownOpen:false
            }
        },
        computed:{
            // method 1
            ...mapGetters({
                funds:'funds'
            }),
            
            
            // method 2
            // funds(){
            //     return this.$store.getters.funds;
            // }
            
            
            
            // randomizeStocks
        },
        methods:{
            ...mapActions(['randomizeStocks']),
            
            endDay:function(){
                this.randomizeStocks()
            },
            saveData(){
                
                
                let dateToBeSaved = {
                    funds:this.$store.getters.funds,
                    stockPortfolio:this.$store.getters.stockPortfolio,
                    stocks:this.$store.getters.getStocks
                }
                
                
                // axios.put('data.json', dateToBeSaved)
                // axios.put('https://vuex-stock-trader-dc8eb.fi    rebaseio.com/data.json', dateToBeSaved)
                axios.put('/data.json', dateToBeSaved)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                  
                  
                this.dropDownOpen = !this.dropDownOpen;

            }
        }
    }
    
</script>