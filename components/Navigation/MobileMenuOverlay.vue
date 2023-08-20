<template>
  <Transition name="fade">
    <div
      v-if="openOverlay"
      class="bg-blue filter-none z-20 fixed bottom-20 m-10 w-[300px] border-t-2 border-r-8 border-b-8 border-l-2 border-black rounded-3xl rounded-tl-sm shadow-md"
    >
      <div class="px-5 py-6">
        <!-- close button  -->

        <div class="absolute top-4 right-4">
          <button
            type="button"
            class="rounded-md bg-transparent text-black hover:text-gray-500"
            @click="$emit('closeOverlay')"
          >
            <span class="sr-only">Close panel</span>
            <img
              :src="closeIcon"
              alt="close mobile menu"
              class="w-12 h-12 md:w-20 md:h-20 icon"
            />
          </button>
        </div>

        <!-- menu items -->

        <div class="px-4 pb-10">
          <ul class="list-none flex flex-col justify-center pl-2 m-0 space-y-4">
            <li :class="{ 'menu-item': true, active: isActive('/') }">
              <NuxtLink
                to="/"
                exact
                class="flex items-center"
                @click="$emit('closeOverlay')"
              >
                <template v-if="isActive('/')"
                  ><Arrow
                    :width="32"
                    :height="32"
                    class="mr-2 -rotate-45" /></template
                ><span class="text-base">Startseite</span>
              </NuxtLink>
            </li>
            <li
              :class="{
                'menu-item': true,
                active: isActive('/neurodiversitaet'),
              }"
            >
              <NuxtLink
                to="/neurodiversitaet"
                exact
                class="flex items-center"
                @click="$emit('closeOverlay')"
              >
                <template v-if="isActive('/neurodiversitaet')"
                  ><Arrow
                    :width="24"
                    :height="24"
                    class="mr-2 -rotate-45" /></template
                ><span class="text-base">Neurodiversität</span>
              </NuxtLink>
            </li>
            <li :class="{ 'menu-item': true, active: isActive('/about') }">
              <NuxtLink
                to="/about"
                class="flex items-center"
                @click="$emit('closeOverlay')"
              >
                <template v-if="isActive('/about')">
                  <Arrow :width="32" :height="32" class="mr-2 -rotate-45"
                /></template>
                <span class="text-base">Über uns</span>
              </NuxtLink>
            </li>
            <li :class="{ 'menu-item': true, active: isActive('/contact') }">
              <NuxtLink
                to="/contact"
                class="flex items-center"
                @click="$emit('closeOverlay')"
              >
                <template v-if="isActive('/contact')">
                  <Arrow
                    :width="32"
                    :height="32"
                    class="mr-2 -rotate-45" /></template
                ><span class="text-base">Kontakt</span></NuxtLink
              >
            </li>
            <li :class="{ 'menu-item': true, active: isActive('/blog') }">
              <NuxtLink
                to="/blog"
                class="flex items-center"
                @click="$emit('closeOverlay')"
                ><template v-if="isActive('/blog')">
                  <Arrow
                    :width="32"
                    :height="32"
                    class="mr-2 -rotate-45" /></template
                ><span class="text-base">Blog</span></NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- imprint info -->

        <ImprintInfo
          class="relative left-3 bottom-2"
          @closeOverlay="$emit('closeOverlay')"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import ImprintInfo from "./ImprintInfo.vue";
import Arrow from "@/components/Arrow.vue";
import closeIcon from "@/assets/icons/icons8-loeschen-100.png";

const route = useRoute();

const props = defineProps({
  openOverlay: Boolean,
});
const emit = defineEmits(["closeOverlay"]);

const isActive = (path) => {
  return path === "/blog" ? route.path.startsWith(path) : route.path === path;
};
</script>

<style>
.fade-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

.fade-leave-active {
  transition: transform 0.5s, opacity 0.1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  transition: transform 0.1s, opacity 0.5s;
}
</style>
