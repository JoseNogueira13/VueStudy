<template>
    <div>
      <h2>Detalhes do Dispositivo</h2>
      <div v-if="device">
        <p>ID: {{ device.id }}</p>
        <p>Nome: {{ device.name }}</p>
        <p>Descrição: {{ device.description }}</p>
        <img :src="device.photo" alt="Foto do dispositivo" />
        <p>
          Estado: <input type="checkbox" :checked="deviceStatus === 'online'" />
        </p>
        <button @click="save">Gravar</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/store';
  import { useRoute, useRouter } from 'vue-router';
  export default {
    setup() {
      const store = useMainStore();
      const route = useRoute();
      const router = useRouter();
      const device = store.devices.find(d => d.id == route.params.id);
      let deviceStatus = device.status;
      return { store, device, deviceStatus, router };
    },
    methods: {
        save() {
      if (this.deviceStatus === 'online') {
        this.deviceStatus = 'offline';
      } else {
        this.deviceStatus = 'online';
      }

      this.store.updateDevice(this.device.id, this.deviceStatus);
      this.router.push('/');
    }
    }
  };
  </script>