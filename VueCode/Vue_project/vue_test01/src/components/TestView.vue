<template>
    <div>
      <div>
        msg的信息：{{msg}} <input type="text">
      </div>
    </div>
</template>

<script>

export default {
  name: "TestView",
  props: ['msg'],
  mounted() {
    console.log('view被创建')
  },
  beforeDestroy() {
    console.log('view将被销毁')
  },
  activated() {
    console.log('view被激活')
  },
  deactivated(){
    console.log('view已失活')
  }
}
</script>

<style scoped>

</style>