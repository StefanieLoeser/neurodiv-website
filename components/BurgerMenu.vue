<template>
  <div>
    <div id="burger" class="flex flex-col fixed right-0 bottom-0">
      <div class="relative sm:max-w-xl mx-auto">
        <nav>
          <button
            class="bg-white w-16 h-16 relative focus:outline-none"
            @click="toggleBurger"
          >
            <!-- <transition name="fade"> -->
            <img
              :src="
                !open
                  ? '../assets/icons/icons8-menue-abgerundet-100.png'
                  : '../assets/icons/icons8-loeschen-100.png'
              "
              alt="menu icon"
              class="w-12 h-12 md:w-20 md:h-20"
            />
            <!-- </transition> -->
            <span class="sr-only">Open main menu</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const open = ref(false);

    const toggleBurger = () => {
      open.value = !open.value;
      console.log(open.value);
    };

    return {
      open,
      toggleBurger,
    };
  },
};
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
