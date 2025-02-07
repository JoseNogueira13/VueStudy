<template>
  <div>
    <h1>Products</h1>
    <h2 v-for="product in store.products" :key="product.id">{{ product.name }}</h2>
  </div>
</template>


<script>
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const store = useUserStore();
    return { store };
  }
};

</script>