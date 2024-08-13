<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="movie-list__card card">
    <img
      class="card__image"
      :src="movie.Poster"
      :alt="movie.Title"
      @error="$event.target.src = '../assets/icons/img-placeholder.png'"
    />
    <div class="card__list">
      <span>Name: {{ movie.Title }}</span>
      <span>Year: {{ movie.Year }}</span>
      <span>imdbID: {{ movie.imdbID }}</span>
      <span>Type: {{ movie.Type }}</span>
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.card__image {
  flex: 1;
  width: 100%;
  object-fit: cover;
}

.card__list {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
  width: 100%;
}
</style>
