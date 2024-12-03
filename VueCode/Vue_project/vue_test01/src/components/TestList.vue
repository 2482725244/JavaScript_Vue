<template>
  <div>
    <ul>
      <li>11</li>
      <li>22</li>
      <li>33</li>
      <li>44</li>
      <li>55</li>
      <li>66</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TestList",
  mounted() {
    console.log('list被创建')
  },
  beforeDestroy() {
    console.log('list将被销毁')
  },
  activated() {
    console.log('list被激活')
  },
  deactivated(){
    console.log('list已失活')
  }

}
</script>

<style scoped>

</style>