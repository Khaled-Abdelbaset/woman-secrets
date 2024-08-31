<template>
  <article
    id="about"
    class="about row g-0 justify-content-center justify-content-lg-between my-5 t-sec"
  >
    <div class="image col-6">
      <img :src="aboutData.img" alt="About Image"/>
    </div>
    <div class="content p-4 col-12 col-sm-10 col-lg-6">
      <h2 class="mb-5">{{ aboutData.title }}</h2>
      <p class="mb-4">
        {{ aboutData.desc }}
      </p>
      <div class="values">
        <h3>values</h3>
        <p v-for="value in aboutData.values" :key="value.id">{{ value.title }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useTestingStore } from '../../stores/testingStore';

const aboutData = ref({});

onMounted(() => {
  aboutData.value = useTestingStore().about;
});
</script>

<style scoped>
.content h2{
  font-size: 8rem;
  font-weight: normal;
}

.content p {
  font-size: 1rem;
}

.values h3{
  font-size: 2.5rem;
  font-weight: bold;
}
.values p{
  color: var(--sec-color);
  background-color: #F4F4F4;
  border-radius: var(--primary-br-radius);
  font-size: 1.2rem;
  padding: .75rem;
  margin: 1rem 0;

}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media screen and (max-width: 1199px) {
  .content h2 {
    font-size: 6rem;
  }
}

@media screen and (max-width: 991px) {
  .content h2 {
    text-align: center;
  }
  .image {
    display: none;
  }
  
}

@media screen and (max-width: 576px) {
  .content h2 {
    font-size: 4rem;
  }
}

</style>