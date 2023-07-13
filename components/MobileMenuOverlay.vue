<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="open = false"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />

      <TransitionChild
        as="template"
        enter="transform transition ease-in-out duration-500"
        enter-from="translate-y-full"
        enter-to="translate-y-0"
        leave="transform transition ease-in-out duration-500"
        leave-from="translate-y-0"
        leave-to="translate-y-full"
      >
        <DialogPanel
          class="fixed inset-0 flex items-end justify-center px-4 pb-6 sm:p-0"
        >
          <div
            class="bg-[#4AF2EB] rounded-t-2xl shadow-xl w-full max-w-md border border-black border-2"
          >
            <div class="px-4 py-6">
              <div class="flex items-start justify-between">
                <DialogTitle
                  class="text-base font-medium leading-6 text-gray-900"
                  >Panel title</DialogTitle
                >
                <div class="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    class="rounded-md bg-transparent text-black hover:text-gray-500"
                    @click="open = false"
                  >
                    <span class="sr-only">Close panel</span>
                    <XMarkIcon class="h-10 w-10" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 py-6">
              <!-- Your content -->
            </div>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(true);
</script>

<style>
.dialog-enter-active,
.dialog-leave-active {
  transition-property: transform;
}

.dialog-enter-from,
.dialog-leave-to {
  transform: translateY(100%);
}
</style>
