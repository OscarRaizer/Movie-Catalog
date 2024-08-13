<script setup>
import TheCard from './TheCard.vue'
import { ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  searchQuery: String
})

const movies = ref([])
const isLoading = ref(false)
const error = ref(null)

const fetchMovies = async (searchTerm) => {
  try {
    isLoading.value = true
    const { data } = await axios.get('https://www.omdbapi.com/', {
      params: { apikey: '8523cbb8', s: searchTerm }
    })
    movies.value = data.Search || []
    error.value = data.Error || null
  } catch {
    error.value = 'An error occurred while fetching movies'
    movies.value = []
  } finally {
    isLoading.value = false
  }
}

watch(() => props.searchQuery, fetchMovies, { immediate: true })
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
