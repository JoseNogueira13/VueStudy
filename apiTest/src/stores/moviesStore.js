
// stores/moviesStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

const API_KEY = 'e822b54ec67f836fb05ce1d59e337e21';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchMovies() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            with_genres: 16,
          },
        });

        this.movies = response.data.results.map(movie => ({
          title: movie.title,
          description: movie.overview,
          image: `${IMAGE_BASE_URL}${movie.poster_path}`,
        }));
      } catch (error) {
        this.error = 'Failed to fetch movies.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
