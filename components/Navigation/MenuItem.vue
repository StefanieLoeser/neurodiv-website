<template>
  <li class="mr-4">
    <NuxtLink
      :to="to"
      class="flex items-center text-black font-normal text-base no-underline"
      :class="{
        'relative left-[-20px] px-20 py-8 bg-teal-300 border border-black shadow rounded-r-[8px] rounded-tl-[1px] rounded-tr-[8px]':
          isActive(to),
      }"
    >
      <template v-if="isActive">
        <Arrow :width="24" :height="24" class="mr-2 -rotate-45" />
      </template>
      <span class="text-base">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  to: String,
  label: String,
});

const route = useRoute();

const isActive = () => route.path === props.to;
</script>

<style></style>
