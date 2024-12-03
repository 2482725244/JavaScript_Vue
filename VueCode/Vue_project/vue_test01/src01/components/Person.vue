<template>
  <div>
    <h1>二组件</h1>
    <h4>number数值为{{number}}</h4>
    <input type="text" v-model="name"> <button @click = "add">添加</button>
    <ul>
      <li v-for = "person in persons" :key = "person.id"> {{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "Person",
  methods:{
    add(){
      const p = {name: this.name, id: nanoid()}
      this.$store.dispatch('personOption/add',p)
      this.name = ''
    }
  },
  data(){
    return {
      name: ''
    }
  },
  computed:{
    persons(){
      return this.$store.state.personOption.persons
    },
    number(){
      return this.$store.state.countOption.number
    }
  }
}
</script>

<style scoped>

</style>