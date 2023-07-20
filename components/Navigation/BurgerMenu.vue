<template>
  <div class="fixed right-0 bottom-0 sm:max-w-xl mx-auto">
    <button
      class="bg-white w-16 h-16 relative focus:outline-none"
      @click="$emit('onClick')"
    >
      <!-- <transition name="fade"> -->
      <img
        :src="!openBurger ? menuIcon : closeIcon"
        alt="menu icon"
        class="w-12 h-12 md:w-20 md:h-20"
      />
      <!-- </transition> -->
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
