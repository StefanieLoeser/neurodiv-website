<template>
  <div
    class="imprint md:block w-9/12 text-sm @responsive p-2 md:fixed md:bottom-5 md:right-5 md:w-[220px] md:text-md"
  >
    <ul class="flex-col p-3">
      <li class="pb-2">
        <NuxtLink
          to="/datenschutz"
          @click="onCloseOverlay"
          class="flex items-center"
        >
          <template v-if="isActive('/datenschutz')">
            <Arrow :width="15" :height="15" class="mr-1 -rotate-45"
          /></template>
          <span>Datenschutzhinweise</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/imprint"
          @click="onCloseOverlay"
          class="flex items-center"
        >
          <template v-if="isActive('/imprint')">
            <Arrow :width="15" :height="15" class="mr-1 -rotate-45" /></template
          ><span>Impressum</span></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import Arrow from "../Arrow.vue";

const route = useRoute();
const emit = defineEmits(["closeOverlay"]);

const onCloseOverlay = () => {
  emit("closeOverlay");
};

const isActive = (path) => {
  return path === "/blog" ? route.path.startsWith(path) : route.path === path;
};
</script>

<style>
.imprint {
  /* padding: 8px 30px 10px 20px; */
  border: 1px solid #000000;
  box-shadow: 2px 3px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}
</style>
