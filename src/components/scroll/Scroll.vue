<template>
  <div class="scroll-container my-5">
    <div class="scroll-content">
      <span class="fw-bold">{{ contactData }}. </span>
      <span>{{ contactData }}.</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTestingStore } from "../../stores/testingStore";

const contactData = ref({});

onMounted(() => {
  const response = useTestingStore().contact;
  contactData.value = response.advertisement?.split(". ")[0];
});
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
}

.scroll-content {
  white-space: nowrap;
  text-transform: capitalize;
  font-size: 5rem;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(-0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 576px) {
  .scroll-content {
    font-size: 3rem;
  }
}
</style>
