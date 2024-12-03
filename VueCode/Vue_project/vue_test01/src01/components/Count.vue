<template>
  <div>
    <h1>一组件</h1>
    <h4>列表元素个数{{persons.length}}</h4>
    <div>学校:{{school}}</div>
    <div>姓名:{{name}}</div>
    <div>统计--> {{number}}</div>
    <div>十倍后的{{bigNumber}}</div>
    <button @click = "add(1)">点击加一</button>
    <br>
    <button @click = "addOdd(1)">奇数加一</button>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions,mapMutations} from 'vuex'
  export default {
    name: 'Count',
    data(){
      return {
        msg: "ccac",
      }
    },
    computed: {

      ...mapState('countOption',['name','number','school']),
      ...mapState('personOption', ['persons']),
      ...mapGetters('countOption', ['bigNumber'])


    },
    methods: {
      ...mapActions('countOption', ['add','addOdd']),
      ...mapMutations('countOption',['ADD'])
    }
  }
</script>