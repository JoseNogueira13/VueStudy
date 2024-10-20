<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask" @keyup.enter="emitCreateTask"/>
        <button @click="emitCreateTask">Add task</button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <li v-for="task in tasks" :key="task.id">
            <button @click="emitToggleTaskCompletion(task.id)"
                    :class="{'toggle': true, 'toggle-completed': task.completed}">
              {{ task.title }}
            </button>
            <button @click="emitDeleteTask(task.id)">Delete</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="emitClearCompleted">Clear completed</button>
        <button @click="emitClearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ pendingTasks }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["tasks"],
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => !task.completed).length;
    },
  },
  methods: {
    emitClearAll() {
      this.$emit('clearAllTasks');
    },
    emitClearCompleted() {
      this.$emit('clearCompletedTasks');
    },
    emitCreateTask() {
      this.$emit('createTask', this.newTask);
      this.newTask = "";
    },
    emitDeleteTask(taskId) {
      this.$emit('deleteTask', taskId);
    },
    emitToggleTaskCompletion(taskId) {
      // Emit the task ID to the parent to toggle its completion status
      this.$emit('toggleTaskCompletion', taskId);
    }
  }
};
</script>
