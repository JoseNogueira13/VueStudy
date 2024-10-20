<template>
    <div>
      <h1>{{ productName }}</h1>
      <p v-html="productDesc"></p>
      <img :src="productImage" alt="Product Image" />
      <p v-if="productPrice < 1000">{{ productPrice }}€</p>
      <button @click="resetPrice">Reset Price</button>
      <p>{{ productAvailable ? 'DISPONÍVEL' : 'NÃO DISPONÍVEL' }}</p>
      <button @click="buyProduct">Comprar</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        productName: "Dell XPS",
        productDesc: "Processador i7<br>Disco SSD 256GB<br> Monitor Samsung 21'",
        productImage: "https://tinyurl.com/2p9dnx68",
        productPrice: 1200,
        productAvailable: true
      };
    },
    methods: {
      resetPrice() {
        this.productPrice = 1200;
      },
      buyProduct(){
        this.productAvailable = false;
      }
    }
  };
</script>
  