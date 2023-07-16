<template>
  <div class="grid-cols-1 md:grid-cols-3 gap-[5rem]">
    <div class="hidden md:block h-screen md:left-column p-10">
      <!-- Left Column -->
      <LeftColumn />
    </div>
    <div class="p-10">
      <!-- Middle Content -->
      <slot />
    </div>
    <div class="p-10">
      <!-- Navigation Menu -->
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
