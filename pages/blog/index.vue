<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>

    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <div v-html="post.content"></div>
          <p>{{ post.date }}</p>
        </li>
      </ul>
    </div>

    <BlogPost
      v-for="blog in blogPosts"
      :key="blog.title"
      :blog-title="blog.title"
      :blog-date="blog.date"
      :blog-intro="blog.intro"
      :blog-tags="blog.tags"
      :blog-category="blog.category"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

// const data = await $fetch(config.wordpressUrl, {
//   method: "POST",
//   body: {
//     query: `

// try to refactor fetch according to nuxt-graphql-client docs:
// const { data } = await useAsyncGgl({
//   operation: "query",
//   body: {
//     query: `
//       query GetPosts {
//         posts {
//           nodes {
//             id
//             title
//             content
//           }
//         }
//       }
//     `,
//   },
// });

// onMounted(() => {
//   console.log("fetched data", data);
// });

// const query = gql`
//   query GetPosts {
//     posts {
//       nodes {
//         id
//         title
//         content
//       }
//     }
//   }
// `;

// const variables = { limit: 5 };
// const { data } = await useAsyncQuery(query, variables);

const blogPosts = [
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    category: "Work",
    tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
  },
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    category: "Work",
    tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
  },
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    category: "Work",
    tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
  },
];
</script>

<style></style>
