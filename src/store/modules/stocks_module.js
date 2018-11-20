
// import stocks_data from '../../data/stock_data.js';    //no longer used


const state ={
    stocks: []
};


const getters ={
    getStocks: state => {
        return state.stocks
    }
};


const mutations ={
    // es6 function
    // 'SET_STOCKS' (state, stocks) {
    //     state.stocks = stocks
    // },
    
    // es5
    'SET_STOCKS': function(state, stocks){
        return state.stocks  = stocks
    },
    'RND_STOCKS' (state){
        state.stocks.forEach(stock =>{
            stock.stockPrice = Math.round(stock.stockPrice*(1+ Math.random() -0.5))
        })
    }
    
}   

const actions = {
    buyStock: ({commit}, order)=>{
        commit('BUT_STOCK', order);
    },
    
    // es5 syntax
    // initStocks:({commit})=>{
    //     commit('SET_STOCKS', stocks_data)   //get data source in an async way
    // },
    
    
    // method 1: get data from json file
    // initStocks:(context)=>{
    //     context.commit('SET_STOCKS', stocks_data)   //get data source in an async way
    // },
    
    // method2: get stocks from firebase
    initStocks:({commit}, stocksFromFirebase)=>{
        commit('SET_STOCKS', stocksFromFirebase)   //get data source in an async way
    },

    randomizeStocks:({commit}) => {
        commit('RND_STOCKS')
    }
}


// es6 syntax
// export it in a object 
export default {
    state,
    getters,
    mutations,
    actions
}



// es5
// export default {
//     state:state,
//     getters:getters,
//     mutations:mutations,
//     actions:actions
// }