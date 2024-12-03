import {nanoid} from 'nanoid'

const actions = {
    add(context,value){
        if(value.name != '')
            context.commit('ADD',value)
        else
           alert("输入不能为空")
    }
}
const mutations = {
    ADD(state,value){
        state.persons.unshift(value)
    }
}
const state = {
    persons: [{name:"张三",id:nanoid()}],
    number: 12
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