<template>
  <div>
    <h2 class="text-head">{{ blogPost.title }}</h2>
    <p class="font-sans">{{ blogPost.date }}</p>
    <p class="font-sans">{{ blogPost.intro }}</p>
    <div v-html="blogPost.text"></div>
  </div>
</template>

<script setup>
const blogPost = {
  title: "Studium ist scheiße, mach das nicht!",
  date: "November 15, 2022",
  intro:
    "Ein satirischer Beitrag mit ernstgemeinten Tipps von Katharina und Giancarlo für Autist*innen",
  text: "Lorem ipsum dolor sit amet",
  category: "Work",
  tags: ["adhs", "ads", "ausbildung", "autismus", "neurodiversität"],
};
</script>

<style></style>
