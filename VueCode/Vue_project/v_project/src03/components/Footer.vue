<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model:checked = "flag"/>
    </label>
    <span>
			<span>已完成{{sNumber}}</span> / 全部{{ length }}
		</span>
    <button class="btn btn-danger" @click="dropAll">清除已完成任务</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Footer",
  data(){
    return {
      flag: false,
      sNumber: 0
    }
  },
  props: ['length'],
  methods: {
    dropAll(){
      this.$emit('dropAll')
    }
  },
  watch: {
    flag(newFlag){
        this.$emit('allChecked',newFlag)
    }
  },
  mounted() {
    pubsub.subscribe('sNumber',(_,number)=>{
      this.sNumber = number
    })
  }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
    }

    .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
    }

    .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }

    .todo-footer button {
      float: right;
      margin-top: 5px;
    }
</style>