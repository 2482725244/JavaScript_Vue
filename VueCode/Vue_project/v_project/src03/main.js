import Vue from "vue"
import App from "./App"

new Vue({
    el: '#app',
    render:c=> c(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
