<template>
  <header
    class="d-md-block d-flex justify-content-between align-items-center p-3"
  >
    <HeaderTop class="mb-md-4" />
    <HeaderBottom />
  </header>
</template>

<script setup>
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--border-color);
  background-color: #FFF;
  z-index: 99999;
}
</style>
