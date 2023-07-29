<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>

    <BlogPost
      v-for="post in posts"
      :key="post.title"
      :blog-title="post.title"
      :blog-date="post.date"
      :blog-intro="post.excerpt"
      :blog-tags="post.tags.nodes"
      :blog-category="post.categories.nodes"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
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
          }

          
        }
      }
    `,
  },
  transform(data) {
    return data.data.posts.nodes;
  },
});

const posts = ref([]);
posts.value = data.value;

watchEffect(() => {
  console.log("fetched data", posts.value);
});

// const blogPosts = [
//   {
//     title: "Studium ist scheiße, mach das nicht!",
//     date: "November 15, 2022",
//     intro:
//       "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
//     category: "Work",
//     tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
//   },
//   {
//     title: "Studium ist scheiße, mach das nicht!",
//     date: "November 15, 2022",
//     intro:
//       "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
//     category: "Work",
//     tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
//   },
//   {
//     title: "Studium ist scheiße, mach das nicht!",
//     date: "November 15, 2022",
//     intro:
//       "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
//     category: "Work",
//     tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
//   },
// ];
</script>

<style></style>
