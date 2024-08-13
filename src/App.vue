<script setup>
import HeaderApp from './components/HeaderApp.vue'
import CardList from './components/CardList.vue'
import { ref } from 'vue'
import axios from 'axios'

// Рефы для данных
const searchQuery = ref('')
const movies = ref([])
const isLoading = ref(false)
const error = ref(null)

// Функция для загрузки фильмов
const fetchMovies = async () => {
  if (!searchQuery.value) {
    // Если строка поиска пуста, не выполняем запрос
    movies.value = []
    error.value = null
    return
  }

  try {
    isLoading.value = true
    const { data } = await axios.get('https://www.omdbapi.com/', {
      params: { apikey: '8523cbb8', s: searchQuery.value }
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

// Функция обработки поиска
const handleSearch = (query) => {
  searchQuery.value = query.trim()
  fetchMovies() // Запрос выполняется только если строка не пустая
}
</script>

<template>
  <HeaderApp @search="handleSearch" />
  <CardList :movies="movies" :isLoading="isLoading" :error="error" />
</template>
