<script>
import { useTodoStore } from '@/stores/todo';

export default {
  data() {
    return {
      todoStore: useTodoStore(),
      newTodo: '',
      todos: [],
    }
  },
  methods: {

    async fetchLocalTodos() {
      try {
        await this.todoStore.fetchTodos();
        console.log("getting the todos");
        
        this.todos = this.todoStore.todos;
      } catch (error) {
        console.log(error);
        
      }
    },
    async removeLocalTodo(id) {
      try {
        await this.todoStore.removeTodo(id);
        this.todos = this.todoStore.todos;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    console.log("created");
    
    this.fetchLocalTodos()
  }
};

</script>

<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed">
        {{ todo.title }}
        <button @click="removeLocalTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>
