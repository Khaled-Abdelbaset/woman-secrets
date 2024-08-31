<template>
  <li
    :class="{ selected: isSelected }"
    :aria-selected="isSelected.toString()"
    @click="handleClick"
    :ref="setOptionRef"
  >
    <slot>{{ option.label || option }}</slot>
  </li>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  option: Object,
  selectedOption: [String, Number]
})

const emit = defineEmits(['select'])

const isSelected = computed(() => props.selectedOption === props.option.value)

const optionRef = ref(null)

const setOptionRef = (el) => {
  optionRef.value = el
}

onMounted(() => {
  if (isSelected.value && optionRef.value) {
    optionRef.value.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
  }
})

const handleClick = () => {
  emit('select', props.option)
}
</script>

<style scoped>
li {
  padding: 0.5rem;
  cursor: pointer;
  font-weight: normal !important;;
}

li:hover {
  background-color: #f1f1f1;
}

li.selected {
  color: var(--primary-color);
  background-color: var(--primary-opacity-color);
}
</style>
