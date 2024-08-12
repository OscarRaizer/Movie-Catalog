<script></script>

<template>
  <div class="movie-list__card card">
    <img class="card__image" src="../assets/icons/img-placeholder.png" alt="movie-image" />
    <div class="card__list">
      <span>Name:</span>
      <span>Year:</span>
      <span>imdbID:</span>
      <span>Type:</span>
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
  max-width: 300px;
  object-fit: cover;
}

.card__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
