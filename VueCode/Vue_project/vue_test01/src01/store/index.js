import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


import countOption from './countOption'
import personOption from './personOption'

export default new Vuex.Store({
        modules:{
            countOption,
            personOption
        }
})

