//import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
//import axios from 'axios'
//import './plugins/axios'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
