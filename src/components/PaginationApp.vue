<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emit = defineEmits(['changePage'])

const pagesToShow = computed(() => {
  const pages = []
  let startPage = Math.max(1, props.currentPage - 4)
  let endPage = Math.min(props.totalPages, startPage + 9)

  if (endPage - startPage < 9) {
    startPage = Math.max(1, endPage - 9)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})
</script>

<template>
  <div class="pagination" v-if="totalPages > 1">
    <button @click="emit('changePage', currentPage - 1)" :disabled="currentPage === 1">
      Previous
    </button>
    <button
      v-for="page in pagesToShow"
      :key="page"
      @click="emit('changePage', page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
    <button @click="emit('changePage', currentPage + 1)" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: white;
}

button.active {
  border: 1px solid black;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
