<template>
  <div v-if="!aboutPage || !aboutPage.acf">Loading...</div>
  <div v-else class="pb-10">
    <h2 class="text-head">{{ aboutPage?.acf?.title }}</h2>

    <div class="flex flex-col gap-10">
      <div
        class="my-5 md:mx-0 md:my-5"
        lang="de"
        v-html="aboutPage?.acf?.intro"
      ></div>
      <div
        v-for="person in teamMembers"
        :key="person.name"
        class="flex flex-col gap-10"
      >
        <TeamMember :person-img="person.img" :person-intro="person.intro" />
      </div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const aboutPage = computed(() => store.getPageById(77));
const teamMembers = computed(() => store.teamMembers);
</script>

<style></style>
