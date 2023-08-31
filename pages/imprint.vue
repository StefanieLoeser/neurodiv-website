<template>
  <div>
    <div v-if="!imprint || !imprint.acf">Loading...</div>
    <div v-else class="pb-10">
      <h2 class="text-head">{{ imprint.acf?.title }}</h2>

      <div v-html="imprint.acf?.impressum"></div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const imprint = computed(() => store.getPageById(61));
</script>
