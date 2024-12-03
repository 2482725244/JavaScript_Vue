<template>
    <div class = "pp">
      <p>名称：{{name}}</p>
      <p>总页数为：{{number}}</p>
    </div>
</template>

<script>

  export default  {
      name: 'Book',
      data(){
        return {
            name: "海运草稿纸",
            number:  1300
        }
      }
  }
</script>

<style>
  .pp {
     background-color: blue;
  }
</style>