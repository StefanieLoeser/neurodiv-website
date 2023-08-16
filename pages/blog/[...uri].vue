<template>
  <div class="container mx-auto frame-s flex flex-col gap-5 mb-10 p-5">
    <div>
      <h1 class="text-head">{{ data?.title }}</h1>
      <div class="font-sans font-medium text-sm pb-1">
        {{ new Date(data?.date).toLocaleDateString() }}
      </div>
    </div>
    <article
      class="mt-4 space-y-2 hyphens-auto"
      v-html="data?.content"
    ></article>
    <div class="flex flex-wrap gap-2">
      <div
        v-if="data.categories.nodes.length > 0"
        v-for="category in data.categories.nodes"
        class="frame-s text-sm py-2 px-3 bg-orange"
      >
        {{ category.name }}
      </div>
      <div v-for="tag in data.tags.nodes" class="frame-s text-sm py-2 px-3">
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const uri = route.params.uri.join("/");
const config = useRuntimeConfig();
const { data, pending, refresh, error } = await useFetch(
  config.public.wordpressUrl,
  {
    method: "get",
    query: {
      query: `
       query MyQuery3($uri: String!) {
           nodeByUri(uri: $uri) {
               ... on Post {
                   id
                   title
                   date
                   content
                   tags {
              nodes {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
               }
           }
       }
       `,
      variables: {
        uri: uri,
      },
    },
    transform(data) {
      return data.data.nodeByUri;
    },
  }
);

useHead({
  title: data.value.title,
});

onMounted(() => {
  console.log("data", data.value);
});
</script>
