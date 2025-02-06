<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
nav {
  display: flex;
  gap: 1rem;
}
</style>