<template>
    <div>
      <h1>Tarefas ({{ tasks.length }})</h1>
  
      <button v-if="tasks.length > 0" @click="sortTasks">SORT</button>
  
      <ul>
        <li v-for="(task, index) in tasks" :key="task.desc">
          {{ task.desc }} (Prioridade: {{ task.priority }})
          <button @click="removeTask(index)">X</button>
        </li>
      </ul>
  
      <p v-if="tasks.length === 0">Nenhuma tarefa disponível.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { desc: 'Do the homework', priority: 2 },
          { desc: 'Clean my room', priority: 1 },
          { desc: 'Read my book', priority: 3 }
        ]
      };
    },
    methods: {
      sortTasks() {
        this.tasks.sort((a, b) => a.priority - b.priority);
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>