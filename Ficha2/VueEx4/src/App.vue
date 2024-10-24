<template>
  <div>
    <NumberList />
    <School />
    <PersonData />
  </div>

</template>

<script>
import NumberList from './components/NumberList.vue'
import School from './components/School.vue'
import PersonData from './components/PersonData.vue';

export default {
  components: {
    NumberList,
    School,
    PersonData
  }
}

</script>
