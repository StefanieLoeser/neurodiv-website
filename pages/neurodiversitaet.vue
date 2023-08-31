<template>
  <div>
    <div v-if="!neurodivPage || !neurodivPage.acf">Loading...</div>
    <div v-else>
      <h2 class="text-head">{{ neurodivPage.acf?.title }}</h2>

      <div v-html="neurodivPage.acf?.neurodiversity"></div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const neurodivPage = computed(() => store.getPageById(187));
</script>
