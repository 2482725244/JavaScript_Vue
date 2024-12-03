<template>
  <li>
    <label>
      <input type="checkbox" :checked = "sta" @change = "changeChecked"/>
      <span>{{thing}}</span>
    </label>
    <button class="btn btn-danger" @click = "dropThing">删除</button>
  </li>
</template>

<script>
export default {
  name: "Todo",
  props: ['thing',"t_id","dropThing_p",'sta','changeChecked_p'],
  methods: {
    dropThing(){
      this.dropThing_p(this.t_id)
    },
    changeChecked(){
        this.changeChecked_p(this.t_id)
    }
  }
}
</script>

<style scoped>
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover {
      background-color: #ddd;
    }

    li:hover button {
      display: block;
    }
</style>