<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model:checked = "flag"/>
    </label>
    <span>
			<span>已完成{{countNumber}}</span> / 全部{{ length }}
		</span>
    <button class="btn btn-danger" @click="dropAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
      flag: false
    }
  },
  props: ['length','dropAll_p','countNumber','allChecked_p'],
  methods: {
    dropAll(){
      this.dropAll_p()
    }
  },
  watch: {
    flag(){
        this.allChecked_p(this.flag)
    }
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