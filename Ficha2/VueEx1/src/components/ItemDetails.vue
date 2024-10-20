<template>
    <div>
      <p><strong>Product:</strong> {{ name }}</p>
      <p><strong>Price:</strong> ${{ price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  