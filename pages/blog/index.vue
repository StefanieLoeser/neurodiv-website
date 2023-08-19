<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>
    <div v-if="pending" class="">Loading...</div>
    <NuxtLink
      v-if="filteredPosts.length > 0"
      v-for="post in filteredPosts"
      :key="post.id"
      :to="`/blog${post.uri}`"
    >
      <BlogPost
        :key="post.title"
        :blog-title="post.title"
        :blog-date="post.date"
        :blog-intro="stripHTMLTags(post.excerpt)"
        :blog-tags="post.tags.nodes"
        :blog-category="post.categories.nodes"
        @filterByTag="selectedTag = $event"
      ></BlogPost>
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const {
  data: posts,
  refresh,
  pending,
} = await useFetch(config.public.wordpressUrl, {
  method: "get",
  query: {
    query: `
      query GetPosts {
        posts {
          nodes {
            id
            title
            excerpt
            date
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
            uri
          }


        }
      }
    `,
  },
  transform(data) {
    return data.data.posts.nodes;
  },
});

let selectedTag = ref(null);

const filteredPosts = computed(() => {
  if (!selectedTag.value) {
    return posts.value; // No filter applied, show all posts
  }
  // Filter the posts by the selected tag or category
  return posts.value.filter((post) =>
    post.tags.nodes.some((tag) => tag.name === selectedTag.value)
  );
});

watchEffect(() => {
  console.log("selected Tag", selectedTag);
});

function stripHTMLTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
</script>
