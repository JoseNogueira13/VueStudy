<template>
    <div>
      <div :class="['card', theme]">
        <h2>Título do Cartão</h2>
        <p>Este é um exemplo de cartão.</p>
      </div>
  
      <button @click="changeTheme('light')">Claro</button>
      <button @click="changeTheme('dark')">Escuro</button>
      <button @click="changeTheme('colorful')">Colorido</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        theme: "light",
      };
    },
    methods: {
      changeTheme(selectedTheme) {
        this.theme = selectedTheme;
      },
    },
  };
  </script>
  
  <style>
  .card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .light {
    background-color: white;
    color: black;
    border: 1px solid #ccc;
  }
  
  .dark {
    background-color: black;
    color: white;
    border: 1px solid #333;
  }
  
  .colorful {
    background-color: orange;
    color: blue;
    border: 1px solid green;
  }
  </style>
  