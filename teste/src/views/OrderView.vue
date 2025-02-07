<template>
  <div>
    <h2>Order details</h2>
    <div v-if="order">
      <p>ID: {{ order.id }}</p>
      <p>Client: {{ order.client }}</p>
      <p>Status: {{ order.status }}</p>
      <table>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Imagem</th>
        </tr>
        <tr v-for="product in order.products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.img }}</td>
      </tr>
      </table>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <div>Selected: {{ selected }}</div>

      <button @click="save">Gravar</button>
    </div> 
  </div>
</template>

<script>
import { useMainStore } from '@/stores/main';
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    let selected = 'A'
  },
  setup() {
    const store = useMainStore();
    const route = useRoute();
    const router = useRouter();
    const order = store.orders.find(order => order.id == route.params.id)
    let orderStatus = order.status;
    let selected = "Pendente"
    
    return {store, order, orderStatus, router}
  },

  methods: {
    save() {
      console.log(selected);
      
    }
  }
}

</script>
