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
    <div class="movie-list__status" v-if="isLoading">Loading...</div>
    <div class="movie-list__status--big" v-else-if="error">{{ error }}</div>
    <div v-else class="container">
      <TheCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
  </section>
</template>

<style lang="scss">
.movie-list {
  display: flex;
  flex-direction: column;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 50px;
  }

  .movie-list__status {
    margin: 0 auto;
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
  }

  .movie-list__status--big {
    background-color: red;
  }
}
</style>
