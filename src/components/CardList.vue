<script setup>
import TheCard from './TheCard.vue'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

const movies = ref([])
const isLoading = ref(false)
const error = ref(null)

const fetchMovies = async (searchTerm, page = 1) => {
  if (!searchTerm) return

  try {
    isLoading.value = true
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: '8523cbb8',
        s: searchTerm,
        page: page
      }
    })
    if (response.data.Search) {
      movies.value = response.data.Search
    } else {
      movies.value = []
    }
  } catch (err) {
    error.value = 'An error occurred while fetching movies'
  } finally {
    isLoading.value = false
  }
}

watch(
  () => props.searchQuery,
  (newQuery) => {
    fetchMovies(newQuery)
  }
)

onMounted(() => {
  if (props.searchQuery) {
    fetchMovies(props.searchQuery)
  }
})
</script>

<template>
  <section class="movie-list">
    <div class="container" v-if="!isLoading && !error">
      <TheCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
    <div v-else-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
  </section>
</template>

<style>
.movie-list .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
}
</style>
