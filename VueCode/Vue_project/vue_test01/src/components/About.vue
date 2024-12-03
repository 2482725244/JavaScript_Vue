<template>
  <div>
    <h2>我是About的内容</h2>
    <div><button @click = "first">view</button> <button @click = "second">list</button></div>
    <keep-alive :include="['TestView','TestList']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:'About',
  methods: {
    first(){
      this.$router.push({
        name: 'tview',
        query: {
          msg: 'TestView1',
        }
      })
    },
    second(){
      this.$router.push({
        name: 'tlist'
      })
    },
  },
  mounted() {
    console.log("About",this.$route)
  },
  beforeRouteEnter(to,from,next){
    console.log("About进入前")
    if(localStorage.getItem('school') === 'beijing1'){
      next()
    }else {
      alert("地址错误")
    }

  },
  beforeRouteLeave(to,from,next){
    console.log("About离开前")
    if (localStorage.getItem('school') === 'beijing1'){
      next()
    }else {
      alert("地址错误")
    }
  }
}
</script>