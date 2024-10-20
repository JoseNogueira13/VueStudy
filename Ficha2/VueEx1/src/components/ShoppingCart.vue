<template>
    <div>
      <h2>Your Shopping Cart</h2>
      <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" />
    </div>
  </template>
  
  <script>
  import CartItem from './CartItem.vue';
  
  export default {
    components: { CartItem },
    data() {
      return {
        cartItems: [
          { name: 'Product 1', price: 29.99 },
          { name: 'Product 2', price: 49.99 },
          { name: 'Product 3', price: 19.99 }
        ]
      };
    }
  }
  </script>
  