<template>
  <div>
    <h2>Order List</h2>
    <table>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Data</th>
        <th>Estado</th>
        <th>Ações</th>
      </tr>
      <tr v-for="order in store.orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.client }}</td>
        <td>{{ order.date }}</td>
        <td>{{ order.status }}</td>
        <td><button @click="$router.push('/order/' + order.id)">Detalhes</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useMainStore } from '@/stores/main';

export default {
  setup(){
    const store = useMainStore();
    return { store }
  }
}

</script>