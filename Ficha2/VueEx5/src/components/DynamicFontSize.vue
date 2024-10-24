<template>
    <div>
      <div :style="{ fontSize: fontSize + 'px' }">
        Olá Mundo!
      </div>
  
      <button @click="increaseFontSize">+</button>
      <button @click="decreaseFontSize">-</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fontSize: 20,
      };
    },
    methods: {
      increaseFontSize() {
        this.fontSize += 2;
      },
      decreaseFontSize() {
          this.fontSize -= 2;
      },
    },
  };
  </script>
  
  <style>
  button {
    margin: 10px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  