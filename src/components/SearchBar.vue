<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
const emit = defineEmits(['search'])

watch(searchTerm, (newValue) => {
  emit('search', newValue)
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
