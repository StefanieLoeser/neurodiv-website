<template>
  <div>
    <div v-if="!datenschutz || !datenschutz.acf">Loading...</div>
    <div v-else class="pb-10">
      <h2 class="text-head">{{ datenschutz.acf?.title }}</h2>

      <div v-html="datenschutz.acf?.datenschutz"></div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const datenschutz = computed(() => store.getPageById(3));
</script>
