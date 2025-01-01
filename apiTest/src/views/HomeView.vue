<script>
import { mapState, mapActions } from 'pinia';
import { useMoviesStore } from '../stores/moviesStore';

export default {
  name: 'Home',
  data() {
    return {};
  },
  computed: {
    ...mapState(useMoviesStore, ['movies', 'loading', 'error']),
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchMovies']),
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>Click on the links above to navigate.</p>

    <div v-if="loading">Loading movies...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="movie in movies" :key="movie.title" class="movie">
        <img :src="movie.image" :alt="movie.title" />
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </main>
</template>

<style>
.movie {
  margin-bottom: 20px;
}
.movie img {
  max-width: 100px;
  margin-right: 10px;
}
.movie h2 {
  font-size: 1.2rem;
}
</style>
