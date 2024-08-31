<template>
  <div class="brand-category-item" @click="$emit('click')">
    <div class="item-image">
      <img :src="item.image" :alt="item.title" />
    </div>
    <h4 class="item-title mt-3">{{ item.title }}</h4>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<style scoped>
.brand-category-item {
  width: 250px;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
}

.brand-category-item:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}

.item-image {
  width: 100%;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-title {
  font-size: 1rem;
  font-weight: bold;
  color: var(--sec-color);
  text-transform: capitalize;
}
</style>
