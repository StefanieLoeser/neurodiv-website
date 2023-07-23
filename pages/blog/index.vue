<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>

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
