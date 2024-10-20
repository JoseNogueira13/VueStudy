<template>
    <div>
      <h2>Imagem da Cidade</h2>
      
      <img :src="imageUrl" :alt="altText" />

      <!-- <img src="/images/cidade.jpg" alt="Imagem da Cidade Local" /> -->
  
      <!-- <img :src="localImage" alt="Imagem da Cidade Local (Assets)" /> -->
    </div>
  </template>
  
  <script>
//   import localImage from '@/assets/cidade.jpg';
  
  export default {
    data() {
      return {
        altText: 'Vila do Conde',
        imageUrl: 'https://i.ytimg.com/vi/1rv77537JaM/maxresdefault.jpg',
        // localImage // Referência à imagem local na pasta src/assets
      };
    }
  }
  </script>
  