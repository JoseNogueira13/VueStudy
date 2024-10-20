<template>
    <div>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    }
  }
  </script>  