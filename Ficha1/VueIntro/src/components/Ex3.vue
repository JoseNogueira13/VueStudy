<template>
    <h2>Peso: {{weight}} kgs</h2>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weight: 72
      };
    },
    beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  };
  </script>
  