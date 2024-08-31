<template>
  <div class="navigations d-flex gap-2 mt-4">
    <button
      class="btn-arrow"
      @click="prevItem"
      :disabled="currentIndex === 0"
    >
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      class="btn-arrow"
      @click="nextItem"
      :disabled="currentIndex === items.length - 1"
    >
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentIndex: Number,
  items: Array,
});

const emit = defineEmits(["prev", "next"]);

function prevItem() {
  emit("prev");
}

function nextItem() {
  emit("next");
}
</script>

<style scoped>
.btn-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  border-radius: 50%;
  color: var(--text-sec-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

.btn-arrow:disabled {
  opacity: .4;
  cursor: default;
}
</style>
