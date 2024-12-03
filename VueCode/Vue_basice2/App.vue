<template>
  <div>
    <h1>总管App</h1>
    <Book></Book>
    <Student></Student>
  </div>
</template>

<script>
  import Book from "./components/Book"
  import Student from "./components/Student"
  export default {
    name: 'App',
    components: {
      Book,
      Student
    }
  }

</script>