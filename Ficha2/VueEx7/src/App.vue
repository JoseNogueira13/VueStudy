<template>
  <div>
    <SchoolsList />
    <TodoList />
  </div>

</template>

<script>
import SchoolsList from './components/SchoolsList.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    SchoolsList,
    TodoList
  }
};

</script>
