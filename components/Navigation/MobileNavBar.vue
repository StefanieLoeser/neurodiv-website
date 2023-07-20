<template>
  <nav class="flex fixed bg-white z-10 w-screen">
    <SocialMedia />
    <BurgerMenu
      @click="toggleBurger"
      @closeBurger="handleCloseOverlay"
      :openBurger="open"
    />
    <MobileMenuOverlay @closeOverlay="handleCloseOverlay" :openOverlay="open" />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import SocialMedia from "@/components/SocialMedia.vue";
import MobileMenuOverlay from "@/components/Navigation/MobileMenuOverlay.vue";
import BurgerMenu from "@/components/Navigation/BurgerMenu.vue";

const open = ref(false);

const toggleBurger = () => {
  open.value = !open.value;
};

const handleCloseOverlay = () => {
  open.value = false;
};
</script>
