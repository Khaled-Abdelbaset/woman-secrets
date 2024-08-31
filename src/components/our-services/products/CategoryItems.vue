<template>
  <div class="category-items">
    <div v-if="items.length === 0">
      <p class="text-center mt-5 fw-bold fs-4">No items found for this category</p>
    </div>
    <div v-else class="items-container">
      <div class="items-list">
        <CategoryItem
          v-for="(item, index) in items"
          :key="item.id"
          :item="item"
          :class="{ 'selected-item': currentIndex === index }"
          @click="selectItem(index)"
        />
      </div>
      <ItemsNavigation
        :currentIndex="currentIndex"
        :items="items"
        @prev="prevItem"
        @next="nextItem"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CategoryItem from './CategoryItem.vue';
import ItemsNavigation from './ItemsNavigations.vue';
import { mockData } from '../../../data/mockData';

const props = defineProps({
  selectedCategoryId: {
    type: Number,
    default: null,
  },
});

const items = ref([]);
const currentIndex = ref(0);

watch(
  () => props.selectedCategoryId,
  async (newCategoryId) => {
    if (newCategoryId !== null) {
      items.value = await fetchItemsForCategory(newCategoryId);
      currentIndex.value = 0;
    } else {
      items.value = [];
    }
  }
);

async function fetchItemsForCategory(categoryId) {
  const category = mockData.find((category) => category.id === categoryId);
  return category ? category.items : [];
}

function selectItem(index) {
  currentIndex.value = index;
  scrollToItem(currentIndex.value);
}

function prevItem() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    scrollToItem(currentIndex.value);
  }
}

function nextItem() {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value += 1;
    scrollToItem(currentIndex.value);
  }
}

function scrollToItem(index) {
  const container = document.querySelector('.items-list');
  const item = container.children[index];
  if (item) {
    container.scrollTo({
      left: item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2,
      behavior: 'smooth',
    });
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  height: 0px;
}

.items-list {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
}

.selected-item {
  background-color: #f4f4f4;
}
</style>
