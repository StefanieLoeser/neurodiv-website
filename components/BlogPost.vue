<template>
  <div class="frame-s flex flex-col gap-5 mb-10 p-5">
    <div>
      <p class="font-sans font-medium text-sm pb-1">
        {{ new Date(blogDate).toLocaleDateString() }}
      </p>
      <NuxtLink :to="`/blog${blogUri}`">
        <h2 class="font-sans text-md font-bold underline pb-2">
          {{ blogTitle }}
        </h2>
      </NuxtLink>
      <p class="font-sans pb-5">{{ blogIntro }}</p>
      <div class="flex flex-wrap gap-2">
        <div
          v-if="blogCategory.length > 0"
          v-for="category in blogCategory"
          class="frame-s text-sm py-2 px-3 bg-orange pointer"
          @click="emitFilterByCategory(category.name)"
        >
          {{ category.name }}
        </div>
        <div
          v-for="tag in blogTags"
          class="frame-s text-sm py-2 px-3 pointer"
          @click="emitFilterByTag(tag.name)"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogUri: String,
  blogTitle: String,
  blogIntro: String,
  blogDate: String,
  blogTags: Array,
  blogCategory: Array,
});

// Emit events to the parent component
const emit = defineEmits(["filterByCategory", "filterByTag"]);

const emitFilterByCategory = (categoryName) => {
  emit("filterByCategory", categoryName);
};

const emitFilterByTag = (tagName) => {
  emit("filterByTag", tagName);
};
</script>
