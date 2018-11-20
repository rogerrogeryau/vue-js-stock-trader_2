import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'
// import * as routes1 from './routes.js'
import store from './store/store.js'
import axios from 'axios'


Vue.use(VueRouter);
// Vue.use(axios)

axios.defaults.baseURL = 'https://vuex-stock-trader-dc8eb.firebaseio.com/';

Vue.filter('currency', value => {
  return '$'+ value.toLocaleString();
})

const router = new VueRouter({
  // routes: routes
  // es6 syntax below:
  routes:routes,
  mode:'history'    //default mode = 'hash' mode with hashtag in the url path ; 'history' mode without hashtag
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
