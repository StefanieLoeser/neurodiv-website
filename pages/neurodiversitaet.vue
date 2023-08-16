<template>
  <div>
    <h2 class="text-head">{{ data.title }}</h2>
    <div v-if="pending">Loading...</div>
    <div v-else v-html="data.content"></div>
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
         query GetNeurodivPage {
             neurodiv: pageBy(uri: "/neurodiversitaet/") {
                  id
                  title
                  content
             }
         }
         `,
    },
    transform(data) {
      return data.data.neurodiv;
    },
  }
);

onMounted(() => {
  console.log("data", data.value);
});
</script>

<style></style>
