<template>
  <div class="flex flex-col gap-5 items-center justify-center">
    <img :src="personImg" alt="team member image" class="img-team" />
    <Arrow :width="24" :height="24" :class="'-rotate-[135deg] text-orange'" />
    <p class="text-sans font-bold" lang="de">{{ personIntro }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  personImg: String,
  personIntro: String,
});
</script>

<style lang="scss" scoped></style>
