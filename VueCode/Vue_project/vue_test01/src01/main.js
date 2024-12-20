import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/index'

Vue.config.productionTip = false

const vm = new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
console.log(vm)
