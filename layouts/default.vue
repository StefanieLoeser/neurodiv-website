<template>
  <div class="grid-cols-1 md:grid-cols-3 gap-[5rem]">
    <div class="h-screen md:left-column p-10">
      <!-- Add px-10 class for padding -->
      <!-- Left Column -->
      <LeftColumn />
    </div>
    <div class="p-10">
      <!-- Middle Content -->
      <slot />
    </div>
    <div class="p-10">
      <!-- Add px-10 class for padding -->
      <!-- Navigation Menu -->
      <NavigationMenu />
    </div>
  </div>
</template>

<script>
import { useWindowSize } from "@vueuse/core";

export default {
  setup() {
    const { width, height } = useWindowSize();
    return {
      width,
      height,
    };
  },
};
</script>

<style></style>
