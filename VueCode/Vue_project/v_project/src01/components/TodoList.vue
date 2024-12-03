<template>
    <div>
      <Todo
          v-for = "todo in todos"
          :thing = "todo.thing"
          :t_id = "todo.id"
          :sta = "todo.sta"
          :key = "todo.id"
          :dropThing_p = "dropThing_p"
          :changeChecked_p = "changeChecked_p"
      />
    </div>
</template>

<script>
import Todo from "./Todo.vue"
export default {
  name: "TodoList",
  components: {
    Todo
  },
  props: ['todos','dropThing_p','changeChecked_p']
}
</script>

<style scoped>
    /*main*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }

    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
</style>