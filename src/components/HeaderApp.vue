<script setup>
import SearchBar from './SearchBar.vue'
import UserApp from './UserApp.vue'

const emit = defineEmits(['search'])

const handleSearch = (query) => {
  emit('search', query)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Movie Catalog</h1>
      <SearchBar @search="handleSearch" />
      <UserApp />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.header .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: $color-blue;
}

.header__title {
  margin: 0;
}
</style>
