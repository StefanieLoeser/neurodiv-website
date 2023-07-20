<template>
  <div class="grid-cols-1 md:grid-cols-3 gap-[5rem] p-10">
    <div class="hidden md:block md:h-screen md:left-column">
      <!-- Left Column -->
      <Logo />
      <SocialMedia />
    </div>
    <div class="md:px-20 md:w-1/2 md:m-auto">
      <!-- Middle Content -->
      <slot />
    </div>
    <div class="">
      <!-- Navigation Menu -->
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
</script>

<style></style>
