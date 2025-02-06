<template>
    <div>
      <h2>Lista de Dispositivos</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Estado</th>
          <th>Ações</th>
        </tr>
        <tr v-for="device in store.devices" :key="device.id">
          <td>{{ device.id }}</td>
          <td>{{ device.name }}</td>
          <td>{{ device.status }}</td>
          <td><button @click="$router.push('/details/' + device.id)">Detalhes</button></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/store';
  export default {
    setup() {
      const store = useMainStore();
      return { store };
    }
  };
  </script>