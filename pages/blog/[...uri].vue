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
        @click="navigateToFilteredPosts('category', category.name)"
        class="frame-s text-sm py-2 px-3 bg-orange"
      >
        {{ category.name }}
      </div>
      <div
        v-for="tag in data.tags.nodes"
        @click="navigateToFilteredPosts('tag', tag.name)"
        class="frame-s text-sm py-2 px-3"
      >
        {{ tag.name }}
      </div>
    </div>
    <div class="fixed bottom-1 right-20 z-[100]">
      <!-- Scroll to Top Button -->
      <button @click="router.back">
        <Arrow
          :width="38"
          :height="38"
          class="text-gray-800 mr-4 -rotate-[-135deg]"
        />
      </button>

      <!-- Go back Button -->
      <button @click="scrollToTop">
        <Arrow
          :width="38"
          :height="38"
          class="text-gray-800 mr-2 -rotate-[135deg]"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import Arrow from "../../components/Arrow.vue";
const route = useRoute();
const router = useRouter();
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const navigateToFilteredPosts = (filterType, filterValue) => {
  router.push({ path: "/blog", query: { [filterType]: filterValue } });
};

useHead({
  title: data.value.title,
});
</script>
