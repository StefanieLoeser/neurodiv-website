<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    class="-rotate-45"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m6 6l13 13m0 0V6.52M19 19H6.52"
    />
  </svg>
</template>

<script setup>
const { width, height } = defineProps(["width", "height"]);
</script>

<style></style>

<!-- "-rotate-45" -->
