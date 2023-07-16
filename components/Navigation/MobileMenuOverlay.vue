<template>
  <div
    class="bg-[#4AF2EB] rounded-t-2xl shadow-xl w-full max-w-md border-black border-2"
  >
    <div class="px-4 py-6">
      <div class="flex items-start justify-between">
        Mobile Menu
        <div class="ml-3 flex h-7 items-center">
          <button
            type="button"
            class="rounded-md bg-transparent text-black hover:text-gray-500"
            @click="open = false"
          >
            <span class="sr-only">Close panel</span>
            <img
              src="'../assets/icons/icons8-loeschen-100.png'
              "
              alt="close mobile menu"
              class="w-12 h-12 md:w-20 md:h-20"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="px-4 py-6">
      <!-- Your content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(true);

const emit = defineEmits(["open"]);
</script>

<style></style>
