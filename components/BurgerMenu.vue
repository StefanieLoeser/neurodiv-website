<template>
  <div>
    <div id="burger" class="flex flex-col fixed right-0 bottom-0">
      <div class="relative sm:max-w-xl mx-auto">
        <nav>
          <button
            class="text-gray-500 w-16 h-16 relative focus:outline-none bg-white"
            @click="toggleBurger"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="flex-col gap-3 block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ 'opacity-0': open }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
              ></span>
            </div>
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
    };

    return {
      open,
      toggleBurger,
    };
  },
};
</script>

<style></style>
