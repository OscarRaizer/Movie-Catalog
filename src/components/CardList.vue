<script setup>
import TheCard from './TheCard.vue'
import LoadingIndicator from './LoadingIndicator.vue'

defineProps({
  movies: Array,
  isLoading: Boolean,
  error: String,
  searchQuery: String,
  totalResults: Number
})
</script>

<template>
  <section class="movie-list" v-auto-animate>
    <div class="movie-list__title container">
      <h2>You seached for: {{ searchQuery }}, {{ totalResults }} results found</h2>
    </div>
    <!-- <div class="movie-list__status" v-if="isLoading">Loading...</div> -->
    <LoadingIndicator v-if="isLoading" />
    <div class="movie-list__status" v-else-if="error">{{ error }}</div>
    <div v-else class="container">
      <div class="movie-list__wrapper">
        <TheCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.movie-list {
  display: flex;
  flex-direction: column;

  .movie-list__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 50px;
  }

  .movie-list__title {
    font-weight: bold;
  }

  .movie-list__status {
    margin: 0 auto;
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
