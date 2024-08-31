<template>
  <div class="lang-list">
    <SelectBox
      id="languageList"
      v-model="languageSelected"
      :options="languages"
      boxWidth="150px"
      icon="fa-solid fa-globe"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SelectBox from '../../ui/selectbox/SelectBox.vue';

const languages = ref([
  { label: 'English', value: 'en' },
  { label: 'Arabic', value: 'ar' },
  { label: 'French', value: 'fr' },
  { label: 'Spanish', value: 'es' },
  { label: 'German', value: 'de' },
]);
const languageSelected = ref(languages.value[0].value);

watch(languageSelected, ()=> {
  console.log(languageSelected.value)
})

</script>

<style></style>
