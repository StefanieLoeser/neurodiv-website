<template>
  <div
    class="imprint md:block w-9/12 text-sm @responsive p-2 md:fixed md:bottom-5 md:right-5 md:w-[220px] md:text-md"
  >
    <ul class="flex-col p-3">
      <li class="pb-2">
        <NuxtLink to="/datenschutz" @click="$emit('closeOverlay')">
          Datenschutzhinweise
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/imprint" @click="$emit('closeOverlay')"
          >Impressum</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  closeOverlay: Function,
});

const emit = defineEmits(["closeOverlay"]);
</script>

<style>
.imprint {
  /* padding: 8px 30px 10px 20px; */
  border: 1px solid #000000;
  box-shadow: 2px 3px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}
</style>
