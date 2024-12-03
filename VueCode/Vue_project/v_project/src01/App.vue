<template>
    <div>
      <Top :addTodo_p = "addTodo_parent"/>
      <TodoList :todos = "Todos"
                :dropThing_p = "dropThing_parent"
                :changeChecked_p = "changeChecked_parent"/>
      <Footer :length = "Todos.length"
              :countNumber = "succesNumber"
              :dropAll_p = "dropAll_parent"
              :allChecked_p = "allChecked_parent"/>
    </div>
</template>

<script>
import Top from "./components/Top.vue"
import TodoList from "./components/TodoList.vue"
import Footer from "./components/Footer.vue"

    export default {
      name: 'App',
      components: {
        Top,
        TodoList,
        Footer
      },
      data(){
        return {
          Todos: [
            {id: '001', thing: "抽烟", sta: true},
            {id: '002', thing: "喝酒", sta: false},
            {id: '003', thing: "开车", sta: false}
          ]
        }
      },
      methods: {
        addTodo_parent(todo){
          this.Todos.unshift(todo)
        },
        dropThing_parent(id){
            this.Todos = this.Todos.filter(function (value){
                return value.id != id
            })
        },
        dropAll_parent() {
            this.Todos = this.Todos.filter(function (value){
              return value.sta == false
            })
        },
        changeChecked_parent(id){
            this.Todos.forEach(function (value){
              if(value.id == id){
                value.sta = !value.sta
              }
            })
        },
        allChecked_parent(flag){
            this.Todos.forEach(function (value){
              value.sta = flag
            })
        }
      },
      computed: {
          succesNumber(){
           return (this.Todos.filter(function (value){
             return value.sta == true
           })).length
          }
      }
    }

</script>
<style>
    /*base*/
    body {
      background: #fff;
    }
    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }
    .btn:focus {
      outline: none;
    }
    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>