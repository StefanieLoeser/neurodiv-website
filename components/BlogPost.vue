<template>
  <div class="frame-s">
    <h2 class="font-sans underline">{{ blogTitle }}</h2>
    <p class="">{{ blogIntro }}</p>
    <p class="font-sans text-sm text-gray-500">{{ blogDate }}</p>
    <div v-for="tag in blogTags" class="">{{ tag }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogTitle: String,
  blogIntro: String,
  blogDate: String,
  blogTags: Array,
});
</script>

<style></style>
