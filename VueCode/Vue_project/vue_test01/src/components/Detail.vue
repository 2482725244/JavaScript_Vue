<template>
  <div>
    <h4>详情</h4>
    <div>商品名：{{name}}</div>
    <div>商品id：{{id}}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log("detail",this.$route)
  },
  props: ['id','name']
}
</script>

<style scoped>

</style>