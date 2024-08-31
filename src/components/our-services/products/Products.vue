<template>
  <div class="brand-products py-5 px-3 px-sm-5 mx-2 mx-sm-4">
    <h3>{{ brand.title }} Product Showcase</h3>
    <Categories
      :categories="brand.categories"
      @categorySelected="handleCategorySelected"
    />
    <CategoryItems :selectedCategoryId="selectedCategoryId" />
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import Categories from "./Categories.vue";
import CategoryItems from "./CategoryItems.vue";

const props = defineProps({
  brand: {
    type: Object,
    required: true,
  },
});

const selectedCategoryId = ref(null);

const handleCategorySelected = (id) => {
  selectedCategoryId.value = id;
};

onMounted(() => {
  if (props.brand.categories.length > 0) {
    selectedCategoryId.value = props.brand.categories[0].id;
  }
});
</script>

<style scoped>
.brand-products {
  background-color: #fff;
  border-radius: 2rem;
}

</style>
