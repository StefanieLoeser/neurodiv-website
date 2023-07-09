<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[5rem]">
    <div class="left-column p-10">
      <!-- Add px-10 class for padding -->
      <!-- Left Column -->
      <LeftColumn />
    </div>
    <div class="middle-content p-10">
      <!-- Middle Content -->
      <slot />
    </div>
    <div class="navigation-menu p-10">
      <!-- Add px-10 class for padding -->
      <!-- Navigation Menu -->
      <NavigationMenu />
    </div>
  </div>
</template>

<style>
.grid {
  grid-template-columns: 1fr; /* Default width for small screens */
  padding: 0 10px; /* Add left and right padding */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 340px 1fr 240px; /* Width for medium screens and above */
  }
}
</style>
