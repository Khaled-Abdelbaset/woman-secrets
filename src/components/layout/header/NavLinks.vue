<template>
  <ul class="nav-links d-md-flex justify-content-between align-items-center gap-2">
    <li class="mb-md-0 mb-2" v-for="item in navItems" :key="item.name">
      <a
        :href="item.href"
        :class="{ active: activeLink === item.name }"
        @click="setActiveLink(item.name)"
      >
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>


<script setup>
import { ref } from 'vue';

const navItems = [
  { name: 'home', label: 'Home', href: '#home' },
  { name: 'about', label: 'About Us', href: '#about' },
  { name: 'services', label: 'Our Services', href: '#services' },
  { name: 'brands', label: 'Partner Brands', href: '#brands' },
  { name: 'contact', label: 'Contact Us', href: '#contact' }
];

const activeLink = ref('home');
const emit = defineEmits(['toggle'])

function setActiveLink(link) {
  activeLink.value = link;
  emit('toggle')
}
</script>

<style scoped>
li a {
  color: var(--sec-color);
  font-weight: bold;
  font-size: .9rem;
}
li a:hover {
  color: var(--primary-color);
}

li a.active {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
</style>
