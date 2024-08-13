<script setup>
import TheCard from './TheCard.vue'

defineProps({
  movies: Array,
  isLoading: Boolean,
  error: String
})
</script>

<template>
  <section class="movie-list">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="movies.length === 0">No movies found</div>
    <div v-else class="container">
      <TheCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
  </section>
</template>

<style>
.movie-list .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
}
</style>
