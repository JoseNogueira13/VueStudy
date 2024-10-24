<template>
  <div>
    <UserCard />
    <Grade />
  </div>

</template>


<script>
import UserCard from './components/UserCard.vue'
import Grade from './components/Grade.vue';

export default {
  components: {
    UserCard,
    Grade
  }
}

</script>