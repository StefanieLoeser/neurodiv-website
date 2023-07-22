<template>
  <div class="pb-10">
    <h2 class="text-head">Blog</h2>

    <div
      v-for="blog in blogPosts"
      :key="blog.title"
      class="frame-s flex flex-col gap-5 mb-10 p-5"
    >
      <div>
        <h2 class="font-sans text-md font-bold underline">
          {{ blog.title }}
        </h2>
        <p class="font-sans">{{ blog.intro }}</p>
        <p class="font-sans text-sm">{{ blog.date }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <!-- :class="{ 'bg-orange': tags[0] }" -->
        <div v-for="tag in blog.tags" class="frame-s text-sm py-2 px-3">
          {{ tag }}
        </div>
      </div>
    </div>

    <!-- <div
  
      class="flex flex-col gap-10"
    > -->
    <!-- <BlogPost
      v-for="blog in blogPosts"
      :key="blog.title"
      :blog-title="blog.title"
      :blog-date="blog.date"
      :blog-intro="blog.intro"
      :blog-tags="blog.tags"
    /> -->
  </div>
  <!-- </div> -->
</template>

<script setup>
const blogPosts = [
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    tags: ["Work", "adhs", "ads", "ausbildung", "autismus", "neurodiversitt"],
  },
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
  },
  {
    title: "Studium ist scheiße, mach das nicht!",
    date: "November 15, 2022",
    intro:
      "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
  },
];
</script>

<style></style>
