<template>
  <div id="app">
    <task :tasks="tasks" @clearAllTasks="clearAllTasks" @clearCompletedTasks="clearCompletedTasks" @createTask="createTask" @deleteTask="deleteTask" @toggleTaskCompletion="toggleTaskCompletion"></task>
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue JS",
          completed: true,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
    };
  },
  methods: {
    clearAllTasks() {
      this.tasks = [];
    },
    clearCompletedTasks() {
      this.tasks = this.tasks.filter((task) => !task.completed);
    },
    createTask(newTask) {
      if (newTask !== "") {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: newTask,
          completed: false,
        });
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    toggleTaskCompletion(taskId) {
      // Find the task by ID and toggle its completion status
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  },
};
</script>