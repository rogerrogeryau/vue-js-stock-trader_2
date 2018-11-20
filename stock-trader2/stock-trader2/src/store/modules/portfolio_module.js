// import stocks_data from '../../data/stock_data.js';


const state ={
    portfolio_Stock: [],
    funds:10000,
    
};


const getters ={
    stockPortfolio: (state, getters) => {
        return state.portfolio_Stock.map(stock => {
            const record = getters.getStocks.find(el => el.stockID === stock.stockID)
            return {
                stockID: stock.stockID,
                quantity: stock.quantity,
                stockName: record.stockName,
                price:record.price
                
            }
        });
    },
    funds: (statge)  =>{
        return state.funds
    }
};


const mutations ={
    // es6 function
    // 'SET_STOCKS' (state, stocks) {   
    //     state.stocks = stocks
    // },
    
    // // es5
    // 'SET_STOCKS': function(state, stocks){
    //     return state.stocks  = stocks
    // },
    // 'RND_STOCKS' (state){
    //     //
    // }
    'BUT_STOCK'(state, {stockID, quantity, stockPrice, stockName}){
        // array.find() only returns one matched elemenet in an array
        const record = state.portfolio_Stock.find(element => element.stockID === stockID);
        if (record) {
            record.quantity += quantity
        }else{
            state.portfolio_Stock.push({
                stockID:stockID,
                quantity:quantity,
                stockName:stockName
            })
        }
        
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockID:stockID, quantity:quantity, stockPrice:stockPrice, stockName:stockName}){
        const record = state.portfolio_Stock.find(el => el.stockID === stockID);
        if (record.quantity > quantity) {
            record.quantity -=quantity;
        } else {
            // delete the stock in an array
            state.portfolio_Stock.splice(state.portfolio_Stock.indexOf(record),1)
        }
        
        state.funds += stockPrice * quantity;
    }
}

const actions = {
    sellStock: ({commit}, order)=>{
        commit('SELL_STOCK', order);
    },

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