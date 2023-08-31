<template>
  <div>
    <div v-if="!satzung || !satzung.acf">Loading...</div>
    <div v-else>
      <h2 class="text-head">{{ satzung.acf?.titel }}</h2>

      <div v-html="satzung.acf?.satzung"></div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const satzung = computed(() => store.getPageById(251));
</script>
