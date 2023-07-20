<template>
  <nav
    class="flex drop-shadow-[-50px_0_35px_rgba(255,255,255)] backdrop-blur-sm place-content-between fixed left-0 bottom-0 bg-white z-10 w-screen"
  >
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
import SocialMedia from "@/components/Navigation/SocialMedia.vue";
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
