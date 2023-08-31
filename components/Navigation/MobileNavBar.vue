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
    <div class="fixed bottom-1 right-24 z-[100]">
      <!-- Scroll to Top Button -->
      <button @click="router.back">
        <Arrow
          :width="38"
          :height="38"
          class="text-gray-600 mr-4 -rotate-[-135deg]"
        />
      </button>

      <!-- Go back Button -->
      <button @click="scrollToTop">
        <Arrow
          :width="38"
          :height="38"
          class="text-gray-600 mr-2 -rotate-[135deg]"
        />
      </button>
    </div>
  </nav>
</template>

<script setup>
import Arrow from "../../components/Arrow.vue";
import { ref } from "vue";
const router = useRouter();
import MobileMenuOverlay from "@/components/Navigation/MobileMenuOverlay.vue";
import BurgerMenu from "@/components/Navigation/BurgerMenu.vue";

const open = ref(false);

const handleCloseOverlay = () => {
  open.value = false;
};
const toggleBurger = () => {
  open.value = !open.value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
