<template>
    <div>
      <h2>Login</h2>
      <input v-model="password" type="password" placeholder="Enter Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '@/stores/store';
  import { useRouter } from 'vue-router';
  export default {
    data() {
      return { password: '' };
    },
    setup() {
      const store = useMainStore();
      const router = useRouter();
      return { store, router };
    },
    methods: {
      login() {
        this.store.login(this.password);
        if (this.store.isAuthenticated) this.$router.push('/');
      }
    }
  };
  </script>