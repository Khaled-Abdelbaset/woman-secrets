<template>
  <nav class="nav-bar">
    <!-- Burger Icon to Open Menu -->
    <span class="toggle-icon d-md-none" @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </span>

    <!-- Menu Container -->
    <div
      :class="[
        'nav-items d-md-flex justify-content-between align-items-center',
        { 'd-none': !isMenuOpen }
      ]"
    >
      <!-- Close Icon Inside Menu -->
      <span class="toggle-icon close-icon d-md-none" @click="toggleMenu">
        <i class="fa-solid fa-xmark"></i>
      </span>
      <!-- Navigation Links -->
      <NavLinks @toggle="toggleMenu" class="my-4 my-md-0" />
      <!-- Social Media Links -->
      <SocialLinks />
    </div>
  </nav>
</template>

<script setup>
import NavLinks from "./NavLinks.vue";
import SocialLinks from "./SocialLinks.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.nav-bar {
  position: relative;
}

/* Toggle Icon Styling */
.toggle-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background-color 0.3s;
  color: var(--sec-color);
}

.toggle-icon:hover {
  background-color: rgba(168, 168, 168, 0.3);
}

.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 100;
}

@media screen and (max-width: 767px) {
  .nav-items {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding: 1rem;
    background-color: #fff;
    border-left: 1px solid var(--border-color);
    z-index: 9999;
  }
}
</style>
