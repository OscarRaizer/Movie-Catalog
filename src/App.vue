<script setup>
import HeaderApp from './components/HeaderApp.vue'
import CardList from './components/CardList.vue'
import PaginationApp from './components/PaginationApp.vue'
import { ref } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const movies = ref([])
const isLoading = ref(false)
const error = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)

const fetchMovies = async () => {
  if (!searchQuery.value) return

  isLoading.value = true
  try {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: { apikey: '8523cbb8', s: searchQuery.value, page: currentPage.value }
    })
    movies.value = response.data.Search || []
    totalPages.value = Math.ceil(response.data.totalResults / 10) || 0
    error.value = null
  } catch (err) {
    error.value = 'Failed to fetch movies'
    movies.value = []
    totalPages.value = 0
  }
  isLoading.value = false
}

const handleSearch = (query) => {
  searchQuery.value = query
  currentPage.value = 1
  fetchMovies()
}

const changePage = (page) => {
  currentPage.value = page
  fetchMovies()
}
</script>

<template>
  <div class="app">
    <HeaderApp @search="handleSearch" />
    <CardList :movies="movies" :isLoading="isLoading" :error="error" />
    <PaginationApp
      v-if="totalPages > 0"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="changePage"
    />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
