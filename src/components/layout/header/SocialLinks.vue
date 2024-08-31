<template>
  <ul class="nav-links d-flex align-items-center gap-2">
    <li v-for="item in socialItems" :key="item.label">
      <a :href="item.href" target="_blank" rel="noopener noreferrer">
        <img :src="item.src" :alt="item.label" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import facebookSrc from "../../../assets/images/facebook.svg";
import twitterSrc from "../../../assets/images/twitter.svg";
import instagramSrc from "../../../assets/images/instagram.svg";

const socialItems = [
  { src: twitterSrc, label: "Twitter", href: "https://www.twitter.com" },
  { src: instagramSrc, label: "Instagram", href: "https://www.instagram.com" },
  { src: facebookSrc, label: "Facebook", href: "https://www.facebook.com" },
];
</script>

<style scoped>
.nav-links li {
  list-style: none;
}

.nav-links a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links img {
  width: 20px;
  height: 20px;
}
</style>
