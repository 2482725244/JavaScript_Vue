<template>
    <div class = "zhuang">
      <p>My name is {{name}}</p>
      <p>年龄为：{{age}}</p>
    </div>
</template>

<script>

  export default  {
      name: 'Student',
      data(){
        return {
            name: "壮壮",
            age:  200
        }
      }
  }
</script>

<style>
  .zhuang {
     background-color: red;
  }
</style>