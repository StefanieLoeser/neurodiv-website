<template>
  <div>
    <h2 class="text-head">{{ data.title }}</h2>
    <div v-if="pending">Loading...</div>
    <div v-else v-html="data.content" class="m"></div>
  </div>
</template>

<script setup>
const route = useRoute();

const config = useRuntimeConfig();
const { data, pending, refresh, error } = await useFetch(
  config.public.wordpressUrl,
  {
    method: "get",
    query: {
      query: `
       query GetImprintPage {
           imprint: pageBy(uri: "/privacy-policy/") {
                id
                title
                content
           }
       }
       `,
    },
    transform(data) {
      return data.data.imprint;
    },
  }
);

onMounted(() => {
  console.log("data", data.value);
});
</script>

<style>
h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0;
}
</style>
