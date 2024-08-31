<template>
  <article
    id="home"
    class="home row g-0 justify-content-between align-items-center"
  >
    <div class="video col-12 col-md-4">
      <video
        :src="homeData.video"
        autoplay
        muted
        loop
        type="video/mp4"
        class="background-video"
      ></video>
    </div>
    <div class="content text-center p-4 col-md-4 col-sm-10 col-12">
      <p class="mb-4">
        {{ homeData.desc }}
      </p>
      <button class="btn-contact">
        <a :href="homeData.btn_link">{{ homeData.btn_text }}</a>
      </button>
    </div>
    <div class="image col-4">
      <img :src="homeData.img" alt="Decorative Image Left" />
    </div>
  </article>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTestingStore } from "../../stores/testingStore";

const homeData = ref({});

onMounted(() => {
  homeData.value = useTestingStore().header;
});
</script>

<style scoped>
.home {
  height: 80vh;
}
.content p {
  word-break: break-all;
  font-size: 2.5rem;
  font-weight: bold;
}
.content .btn-contact {
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  border-radius: 5rem;
  background-color: var(--primary-color);
}
.content .btn-contact a {
  color: var(--sec-color);
}

.video,
.image {
  height: 100%;
  position: relative;
}

.video video,
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media screen and (max-width: 1199px) {
  .content p {
    font-size: 2rem;
  }
}

@media screen and (max-width: 991px) {
  .content p {
    font-size: 1.3rem;
  }
  .content .btn-contact {
    font-size: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .home {
    justify-content: center !important;
    align-items: center;
    position: relative;
    background-size: cover;
    background-position: center;
    height: 100vh;
    z-index: 99;
    animation: backgroundSlider 12s infinite;
  }
  .home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
  }
  .content p {
    color: var(--text-color);
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .image {
    display: none;
  }
}
</style>
