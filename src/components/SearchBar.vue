<script setup>
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'

const searchTerm = ref('')
const emit = defineEmits(['search'])

const debouncedSearch = debounce((newValue) => {
  if (newValue.trim() !== '') {
    emit('search', newValue.trim())
  }
}, 300)

watch(searchTerm, (newValue) => {
  debouncedSearch(newValue)
})
</script>
<template>
  <input v-model="searchTerm" class="header_input" type="text" placeholder="search" />
</template>
<style>
.header_input {
  flex-grow: 1;
}
</style>
