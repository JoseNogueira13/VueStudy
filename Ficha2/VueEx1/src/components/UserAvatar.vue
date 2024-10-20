<template>
    <img :src="avatarUrl" alt="User Avatar" class="user-avatar" />
  </template>
  
  <script>
  export default {
    props: {
      avatarUrl: {
        type: String,
        required: true
      }
    }
  }
  </script>
  