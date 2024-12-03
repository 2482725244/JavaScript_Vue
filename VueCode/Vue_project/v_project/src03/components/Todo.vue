<template>
  <li>
    <label>
      <input type="checkbox" :checked = "sta" @change = "changeChecked"/>
      <span v-if="!eShow" >{{thing}}</span>
      <input v-if="eShow" type="text" v-model="eCentent" @blur = "saveCentent" ref = "cinput"/>
    </label>
    <button class="btn btn-danger" @click = "dropThing">删除</button>
    <button v-if = "btnShow" class="btn btn-compile" @click = "compile">编辑</button>

  </li>
</template>

<script>
export default {
  name: "Todo",
  data(){
    return {
      eShow:false,
      eCentent: this.thing
    }
  },
  props: ['thing',"t_id",'sta'],
  methods: {
    dropThing(){
      this.$bus.$emit('dropThing',this.t_id)
    },
    changeChecked(){
        this.$bus.$emit('changeChecked',this.t_id)
    },
    compile(){
        this.eShow = !this.eShow
        this.$nextTick(function () {
          this.$refs.cinput.focus()
        })
    },
    saveCentent(){
        this.eShow = !this.eShow
        this.$bus.$emit('upThing',this.t_id,this.eCentent)
    }
  },
  computed: {
    btnShow(){
      return this.eShow == true ? false : true
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