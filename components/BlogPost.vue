<template>
  <div class="frame-s flex flex-col gap-5 mb-10 p-5">
    <div>
      <h2 class="font-sans text-md font-bold underline pb-1">
        {{ blogTitle }}
      </h2>
      <p class="font-sans pb-1">{{ blogIntro }}</p>
      <p class="font-sans text-sm pb-2">{{ blogDate }}</p>
      <div class="flex flex-wrap gap-2">
        <div
          v-if="blogCategory.length > 0"
          v-for="category in blogCategory"
          class="frame-s text-sm py-2 px-3 bg-orange"
        >
          {{ category.name }}
        </div>
        <div v-for="tag in blogTags" class="frame-s text-sm py-2 px-3">
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogTitle: String,
  blogIntro: String,
  blogDate: String,
  blogTags: Array,
  blogCategory: String,
});
</script>

<style></style>
