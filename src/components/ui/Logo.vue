<template>
  <div class="logo">
    <a href="#">
      <img src="../../assets/images/Logo.svg" alt="logo" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  logoSize: {
    type: String,
    default: '200px'
  }
})
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
}

@media screen and (max-width: 576px) {
  img {
    width: 150px;
  }
}
</style>