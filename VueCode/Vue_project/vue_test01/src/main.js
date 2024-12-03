import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import {Button,Row} from "element-ui";


Vue.config.productionTip = false
//Vue.use(ElementUI)
Vue.component(Button.name,Button)
Vue.component(Row.name,Row)




const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
console.log(vm)
