<template>
  <div>
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
  import Count from "@/components/Count.vue";
  import Person from "@/components/Person.vue"
  export default {
    name: 'App',
    data() {
      return {
        msg: "ccac"
      }
    },
    components:{
      Count,
      Person
    },
    mounted(){
      console.log(this)
    }

  }
</script>