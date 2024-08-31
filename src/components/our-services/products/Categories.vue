<template>
  <div class="brand-categories my-4">
    <button
      v-for="category in categories"
      :key="category.id"
      :class="['btn-category', { active: activeCategory === category.id }]"
      @click="handleClick(category.id)"
    >
      {{ category.title }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
  },
});

const emit = defineEmits(['categorySelected']);

const activeCategory = ref(props.categories[0].id);

const handleClick = (id) => {
  activeCategory.value = id;
  emit('categorySelected', id);
};
</script>

<style scoped>
::-webkit-scrollbar {
  height: 0px;
}

.brand-categories {
  display: flex;
  overflow-x: auto;
  gap: .5rem;
}

.btn-category {
  flex-shrink: 0;
  padding: .5rem 1rem;
  border-radius: 2rem;
  background-color: transparent;
  color: var(--text-sec-color);
  opacity: .8;
  font-weight: bold;
  font-size: .9rem;
}

.btn-category:hover {
  background-color: var(--primary-color);
  color: var(--sec-color);
  opacity: 1;
}

.btn-category.active {
  background-color: var(--primary-color);
  color: var(--sec-color);
  opacity: 1;
}
</style>
