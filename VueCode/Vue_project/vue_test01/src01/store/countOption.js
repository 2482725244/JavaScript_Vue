import {nanoid} from "nanoid";

const actions = {
    add(context,value){
        context.commit('ADD',value)
    },
    addOdd(context,value){
        if(context.state.number % 2 != 0){
            context.commit('ADD_ODD',value)
        }
    },
}
const mutations = {
    ADD(state,value){
        state.number += value
    },
    ADD_ODD(state,value){
        state.number += value
    },
}
const state = {
    school: "北京",
    name: "王明",
    number: 1,
}
const getters = {
    bigNumber(state){
        return state.number * 100
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}