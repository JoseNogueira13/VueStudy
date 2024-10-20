<template>
    <button @click="removeItem">Remove</button>
  </template>
  
  <script>
  export default {
    methods: {
      removeItem() {
        console.log('Remove item');
      }
    }
  }
  </script>
  