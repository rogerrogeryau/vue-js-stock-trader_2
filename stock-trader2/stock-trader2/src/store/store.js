import Vue from 'vue';
import Vuex from 'vuex';


// modules
import stocks_module from './modules/stocks_module.js';
import portfolio_module from './modules/portfolio_module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        stocks_module,
        portfolio_module
    }
});  