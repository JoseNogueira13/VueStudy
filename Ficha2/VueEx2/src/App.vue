<template>

  <div>
    <userData></userData>
    <cityImage></cityImage>
  </div>

</template>

<script>
import userData from './components/userData.vue'
import cityImage from './components/cityImage.vue'

export default {
  components: {
    userData,
    cityImage
  }
}

</script>