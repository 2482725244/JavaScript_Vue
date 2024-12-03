<template>
    <div>
      <Top :addTodo_p = "addTodo_parent"/>
      <TodoList :todos = "Todos"/>
      <Footer :length = "Todos.length"
              @dropAll = "dropAll"
              ref = "footer"
      />
    </div>
</template>

<script>
import pubsub from "pubsub-js"
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
          Todos: JSON.parse(localStorage.getItem('todos'))
        }
      },
      methods: {
        addTodo_parent(todo){
          this.Todos.unshift(todo)
        },
        dropThing(id){
            this.Todos = this.Todos.filter(function (value){
                return value.id != id
            })
        },
        dropAll() {
            this.Todos = this.Todos.filter(function (value){
              return value.sta == false
            })
            this.$refs.footer.flag = false
        },
        changeChecked(id){
            this.Todos.forEach(function (value){
              if(value.id == id){
                value.sta = !value.sta
              }
            })
        },
        allChecked(flag){
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
      },
      watch: {
        Todos:{
          deep:true,
          handler(){
            localStorage.setItem('todos',JSON.stringify(this.Todos))
          }
        },
        succesNumber(newNumber){
          pubsub.publish('sNumber',newNumber)
        }
      },
      mounted() {
        this.$bus.$on('dropThing',id=>{
            this.dropThing(id)
        })
        this.$bus.$on('changeChecked',id=>{
          this.changeChecked(id)
        })
        this.$refs.footer.$on('allChecked',flag=>{
          this.allChecked(flag)
        })
        pubsub.publish('sNumber',this.succesNumber)

        this.$bus.$on('upThing',(id,thing)=>{
          this.Todos.forEach(function (value){
              if(value.id == id){
                value.thing = thing
              }
          })
        })
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
    .btn-compile {
      color: #fff;
      background-color: #4972da;
      border: 1px solid #422fbd;
    }
    .btn-compile:hover {
      color: #fff;
      background-color: #2f68bd;
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