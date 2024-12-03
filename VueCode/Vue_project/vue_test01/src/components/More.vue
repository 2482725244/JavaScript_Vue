<template>
  <div>
    <h3>more</h3>
    <button @click = "back">后退</button>
    <button @click = "forward">前进</button>
    <ul>
      <li v-for = "detail in details" :key = "detail.id">
        <router-link :to="{
          name: 'cctv1',
          query:{
            id: detail.id,
            name: detail.name
          }
        }">
          {{detail.name}}
        </router-link>
        <button @click = "pushShow(detail)">push展示</button>
        <button @click = "replaceShow(detail)">replace展示</button>
      </li>
    </ul>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "More",
  data(){
    return {
      details: [
          {id: nanoid() ,name: "手机"},
          {id: nanoid(),name: "电脑"},
          {id: nanoid(),name: "笔"}]
    }
  },
  methods:{
    pushShow(detail){
      this.$router.push({
        name: "cctv1",
        query: {
          id: detail.id,
          name: detail.name
        }
      })
    },
    replaceShow(detail){
      this.$router.replace({
        name: "cctv1",
        query: {
          id: detail.id,
          name: detail.name
        }
      })
    },
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  },

  mounted(){

  }
}
</script>

<style scoped>

</style>