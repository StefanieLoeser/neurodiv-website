<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
    <!-- Left Column -->
    <div class="hidden md:inline-block md:left-column">
      <Logo :class="' md:h-screen fixed'" />
      <SocialMedia />
    </div>

    <!-- Middle Content -->
    <div class="md:items-center">
      <slot />
    </div>

    <!-- Right Column / Navigation Menu -->
    <div class="">
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
</script>

<style></style>
