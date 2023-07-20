<template>
  <div class="sm:max-w-xl my-auto">
    <button class="w-16 h-16 focus:outline-none" @click="$emit('onClick')">
      <img
        :src="!openBurger ? menuIcon : closeIcon"
        alt="menu icon"
        class="w-12 h-12 md:w-20 md:h-20"
      />
      <span class="sr-only">Open main menu</span>
    </button>
  </div>
</template>

<script setup>
import menuIcon from "@/assets/icons/icons8-menue-abgerundet-100.png";
import closeIcon from "@/assets/icons/icons8-loeschen-100.png";

const props = defineProps({
  openBurger: Boolean,
});
const emit = defineEmits(["closeBurger", "onClick"]);
</script>

<style></style>
