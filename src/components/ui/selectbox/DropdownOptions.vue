<template>
  <ul class="options-list" v-if="isDropdownOpen" tabindex="0" @keydown="handleKeydown">
    <DropdownOption
      v-for="option in displayedOptions"
      :key="option.value || option"
      :option="option"
      :selectedOption="selectedOption"
      @select="selectOption"
    />
    <p v-if="displayedOptions.length === 0" class="no-data">لم يتم إيجاد بيانات</p>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import DropdownOption from './DropdownOption.vue'

const props = defineProps({
  options: Array,
  isDropdownOpen: Boolean,
  selectedOption: [String, Number],
  searchQuery: String,
  searchable: Boolean
})

const emit = defineEmits(['select'])

const displayedOptions = computed(() => {
  if (props.searchable && props.searchQuery) {
    const query = props.searchQuery.toLowerCase()
    return props.options.filter((option) => option.label.toLowerCase().includes(query))
  }
  return props.options
})

const selectOption = (option) => {
  emit('select', option)
}
</script>

<style scoped>
.options-list {
  position: absolute;
  top: 120%;
  left: 0;
  right: 0;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0.25rem 0;
  margin: 0;
  color: var(--secondary-color);
  box-shadow: var(--primary-box-shadow);
  border-radius: var(--primary-br-radius);
  z-index: 999;
}
.options-list::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 0;
  border-right: 1px solid var(--border-color)
}

.no-data {
  text-align: center;
  background-color: #f9f9f9;
  padding: 0.5rem;
}
</style>
