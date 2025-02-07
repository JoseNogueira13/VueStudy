import { ref } from 'vue'
import { defineStore } from 'pinia'
const API_BASE_URL = "http://localhost:3000"

export const useTodoStore = defineStore('todo', {
  satate: () => ({
    todos: []
  }),

  getters: {
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    pendingTodos: (state) => state.todos.filter((todo) => !todo.completed),
    totalTodos: (state) => state.todos.length,
  },

  actions: {
    async addTodo(todo) {
      try {
        const newTodo = {title, completed: false}
        const createdTodo = await api.post(API_BASE_URL, 'todos', newTodo)
        this.todos.push(createdTodo)
      } catch (error) {
        throw new Error('Failed to add todo')
      }
    },
    async fetchTodos() {
      try {
        this.todos = await fetch(`${API_BASE_URL}/todos`).then((res) => res.json())
      } catch (error) {
        throw new Error('Failed to fetch todos')
      }
    },

    async removeTodo(id) {
      try {
        await api.del(`${API_BASE_URL}/todos/${id}`)
        this.todos = this.todos.filter((todo) => todo.id !== id)
      } catch (error) {
        throw new Error('Failed to remove todo')
      }
    }
  },
})
