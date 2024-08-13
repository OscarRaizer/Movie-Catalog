<script setup>
import HeaderApp from './components/HeaderApp.vue'
import CardList from './components/CardList.vue'
import { ref } from 'vue'

const searchQuery = ref('')

const handleSearch = (query) => {
  searchQuery.value = query
}
</script>

<template>
  <HeaderApp @search="handleSearch" />
  <CardList :searchQuery="searchQuery" />
</template>

<style lang="scss" scoped></style>
