<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>
    <div v-if="pending" class="">Loading...</div>
    <NuxtLink
      v-if="posts"
      v-for="post in posts"
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
      />
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

// const posts = ref([]);
// posts.value = data.value;

watchEffect(() => {
  console.log("fetched data", posts.value);
});

function stripHTMLTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
</script>

<style></style>
