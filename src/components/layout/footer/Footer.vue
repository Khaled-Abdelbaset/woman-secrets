<template>
  <footer class=" ">
    <div class="row g-0 contact p-3 justify-content-between">
      <!-- Information Section -->
      <div class="col-xl-2 col-lg-2 col-sm-5 my-3">
        <h5>Informations</h5>
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Service</a></li>
          <li><a href="#">Our Product</a></li>
        </ul>
      </div>

      <!-- Support Section -->
      <div class="col-xl-2 col-lg-2 col-sm-5 my-3">
        <h5>Support</h5>
        <ul class="list-unstyled">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <!-- Logo Section -->
      <div class="col-xl-2 col-lg-5 col-sm-12 my-3 text-center">
        <Logo />
      </div>

      <!-- Contacts Section -->
      <div class="col-xl-2 col-lg-3 col-sm-5 my-3">
        <h5>Contacts</h5>
        <p><a href="tel:+96644467356">{{ footerData.phone }}</a></p>
        <p>
          <a href="mailto:support@womansecrets.com">{{ footerData.email }}</a>
        </p>
        <SocialLinks :socials="footerData.socials" :class="'mt-3'" />
      </div>

      <!-- Subscribe Section -->
      <div class="subscribe col-xl-3 col-lg-9 col-sm-5 my-3">
        <h5>Subscribe For More</h5>
        <form class="" @submit.prevent="handleSubmit">
          <input type="email" v-model="email" placeholder="Enter your mail" />
          <button type="submit" class="btn-subscribe">SEND</button>
        </form>
      </div>
    </div>
    <div class="text-end p-3">
      <small>{{ new Date().getFullYear() }} &copy; All Rights Reserved</small>
    </div>
  </footer>
</template>

<script setup>
import Logo from "../../ui/Logo.vue";
import SocialLinks from "../header/SocialLinks.vue";
import { useSubscribeStore } from "../../../stores/subscribeStore";

import { onMounted, ref } from "vue";
import { useTestingStore } from "../../../stores/testingStore";

const email = ref("");
const footerData = ref({});

const handleSubmit = async () => {
  const response = await useSubscribeStore().subscribe(email.value);
  if (response) email.value = "";
};

onMounted(() => {
  footerData.value = useTestingStore().footer;
  console.log(footerData.value);
});
</script>

<style scoped>
footer {
  background-color: var(--primary-color);
}
.contact {
  border-bottom: 1px solid var(--border-color);
}
h5 {
  margin-bottom: 0.75rem;
}

p,
a,
ul li {
  color: var(--sec-color);
  margin-bottom: 0.25rem;
}

.subscribe input {
  border: 1px solid var(--border-color);
  border-radius: var(--primary-br-radius);
  padding: 0.5rem 0.75rem;
  color: var(--sec-color);
  margin-bottom: 0.5rem;
}

.btn-subscribe {
  border: 1px solid var(--border-color);
  border-radius: var(--primary-br-radius);
  background-color: var(--primary-color);
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: var(--sec-color);
}
</style>
