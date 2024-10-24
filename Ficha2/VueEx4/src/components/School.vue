<template>
    <div>
        <p>Number of characters {{ countCharacters }}</p>
        <p>{{ school }}</p>
        <button @click="upperCase">Upper Case</button>
    </div>


</template>

<script>
export default {
  data() {
    return {
      school: "esmad"
    }
  },
  methods: {
    upperCase(){
        this.school = this.school.toUpperCase();
    }
  },
  computed: {
    countCharacters() {
        return this.school.length;
    }
  }
}

</script>