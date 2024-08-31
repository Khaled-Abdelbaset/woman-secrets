<template>
  <article id="brands" class="brands">
    <div class="brand-item py-5" v-for="brand in brandsData" :key="brand.id">
      <div class="brand-description text-center mb-5">
        <h2 class="mb-4">{{ brand.title }}<sup>&reg;</sup></h2>
        <p class="m-auto">{{ brand.desc }}</p>
      </div>
      <Products :brand="brand" />
    </div>
  </article>
</template>

<script setup>
import Products from './products/Products.vue'
import { onMounted, ref } from "vue";
import { useTestingStore } from "../../stores/testingStore";

const brandsData = ref({});

onMounted(() => {
  brandsData.value = useTestingStore().brands;
  console.log(brandsData.value);
});
</script>

<style scoped>
.brands {
  background-color: var(--primary-color);
}
.brand-description h2 {
  letter-spacing: .25rem;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.brand-description p {
  font-size: 1rem;
  width: 75%;
  color: var(--text-sec-color);
}


@media screen and (max-width: 576px) {
  .brand-description h2 {
    font-size: 4rem;
  }
  .brand-description p {
    width: 90%;
    font-size: .8rem;
  }
}

</style>
