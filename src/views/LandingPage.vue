<template>
  <section class="landing-page">
    <Loader v-if="isLoading" />
    <template v-else>
      <Header />
      <Home />
      <About />
      <Brands />
      <Scroll />
      <Footer />
    </template>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTestingStore } from "../stores/testingStore";
import Header from "../components/layout/header/Header.vue";
import Home from "../components/home/Home.vue";
import About from "../components/about/About.vue";
import Brands from "../components/our-services/Brands.vue";
import Loader from "../components/ui/Loader.vue";
import Scroll from "../components/scroll/Scroll.vue";
import Footer from "../components/layout/footer/Footer.vue";

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await useTestingStore().getTestingData();
  isLoading.value = false;
});
</script>

<style></style>
