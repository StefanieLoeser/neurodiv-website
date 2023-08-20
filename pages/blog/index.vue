<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>
    <div v-if="pending" class="">Loading...</div>

    <!-- Filtered Results Message -->
    <div v-if="selectedFilter && filterType" class="pb-5">
      {{ filteredPosts.length }} Posts
      <span v-if="filterType === 'category'">in der Kategorie</span>
      <span v-else-if="filterType === 'tag'">zum Thema</span>
      <span class="font-bold">"{{ selectedFilter }}"</span>
      <button @click="clearFilter" class="block frame-s text-sm px-2 py-2 mt-3">
        x Filter entfernen
      </button>
    </div>

    <BlogPost
      v-if="filteredPosts.length > 0"
      v-for="post in filteredPosts"
      :key="post.id"
      :blog-uri="post.uri"
      :blog-title="post.title"
      :blog-date="post.date"
      :blog-intro="stripHTMLTags(post.excerpt)"
      :blog-tags="post.tags.nodes"
      :blog-category="post.categories.nodes"
      @filterByTag="handleTagFilter"
      @filterByCategory="handleCategoryFilter"
    ></BlogPost>
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

let selectedFilter = ref(null);
let filterType = ref(null);

onMounted(() => {
  if (route.query.tag) {
    selectedFilter.value = route.query.tag;
    filterType.value = "tag";
  } else if (route.query.category) {
    selectedFilter.value = route.query.category;
    filterType.value = "category";
  }
});

const handleTagFilter = (tagName) => {
  selectedFilter.value = tagName;
  filterType.value = "tag";
};

const handleCategoryFilter = (categoryName) => {
  selectedFilter.value = categoryName;
  filterType.value = "category";
};

const clearFilter = () => {
  selectedFilter.value = null;
  filterType.value = null;
};

const filteredPosts = computed(() => {
  if (!selectedFilter.value || !filterType.value) {
    return posts.value; // No filter applied, show all posts
  }

  if (filterType.value === "tag") {
    // Filter by tag
    return posts.value.filter((post) =>
      post.tags.nodes.some((tag) => tag.name === selectedFilter.value)
    );
  } else if (filterType.value === "category") {
    // Filter by category
    return posts.value.filter((post) =>
      post.categories.nodes.some(
        (category) => category.name === selectedFilter.value
      )
    );
  }

  return []; // Default to an empty array if no matching filter type
});

function stripHTMLTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
</script>
