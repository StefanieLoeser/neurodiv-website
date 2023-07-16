<template>
  <div class="flex fixed bg-white z-10 w-screen">
    <nav>
      <div>
        <SocialMedia />
        <div class="fixed right-0 bottom-0 sm:max-w-xl mx-auto">
          <button
            class="bg-white w-16 h-16 relative focus:outline-none"
            @click="toggleBurger"
          >
            <!-- <transition name="fade"> -->
            <img
              :src="!open ? menuIcon : closeIcon"
              alt="menu icon"
              class="w-12 h-12 md:w-20 md:h-20"
            />
            <!-- </transition> -->
            <span class="sr-only">Open main menu</span>
          </button>
        </div>

        <!-- <MobileMenuOverlay v-if="open" /> -->

        <div
          v-if="open"
          id="mobile-menu"
          class="bg-[#4AF2EB] z-20 fixed bottom-20 w-[300px] m-auto border-t-2 border-r-8 border-b-8 border-l-2 border-black rounded-3xl rounded-tl-sm"
        >
          <div class="px-5 py-6">
            <!-- close button  -->

            <div class="absolute top-4 right-4">
              <button
                type="button"
                class="rounded-md bg-transparent text-black hover:text-gray-500"
                @click="open = false"
              >
                <span class="sr-only">Close panel</span>
                <img
                  :src="closeIcon"
                  alt="close mobile menu"
                  class="w-12 h-12 md:w-20 md:h-20"
                />
              </button>
            </div>

            <!-- menu items -->

            <div class="px-4 pb-10">
              <ul
                class="list-none flex flex-col justify-center pl-2 m-0 space-y-4"
              >
                <li :class="{ 'menu-item': true, active: isActive('/') }">
                  <NuxtLink
                    to="/"
                    exact
                    class="flex items-center"
                    @click="open = false"
                  >
                    <template v-if="isActive('/')"
                      ><Arrow :width="32" :height="32" class="mr-2" /></template
                    ><span class="text-base">Startseite</span>
                  </NuxtLink>
                </li>
                <li :class="{ 'menu-item': true, active: isActive('/about') }">
                  <NuxtLink
                    to="/about"
                    class="flex items-center"
                    @click="open = false"
                  >
                    <template v-if="isActive('/about')">
                      <Arrow :width="32" :height="32" class="mr-2"
                    /></template>
                    <span class="text-base">Über uns</span>
                  </NuxtLink>
                </li>
                <li
                  :class="{ 'menu-item': true, active: isActive('/contact') }"
                >
                  <NuxtLink
                    to="/contact"
                    class="flex items-center"
                    @click="open = false"
                  >
                    <template v-if="isActive('/contact')">
                      <Arrow :width="32" :height="32" class="mr-2" /></template
                    ><span class="text-base">Kontakt</span></NuxtLink
                  >
                </li>
                <li :class="{ 'menu-item': true, active: isActive('/blog') }">
                  <NuxtLink
                    to="/blog"
                    class="flex items-center"
                    @click="open = false"
                    ><template v-if="isActive('/blog')">
                      <Arrow :width="32" :height="32" class="mr-2" /></template
                    ><span class="text-base">Blog</span></NuxtLink
                  >
                </li>
                <!-- <li :class="{ 'menu-item': true, active: isActive('/neurodiversity') }">
          <a href="/neurodiversity">Neurodiversität</a>
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/info') }">
          <a href="/info">Infos und Anlaufstellen</a>
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/membership') }">
          <a href="/membership">Mitgliedschaft</a>
        -->
              </ul>
            </div>
            <ImprintInfo class="relative left-3 bottom-2" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import ImprintInfo from "./ImprintInfo.vue";
import { ref } from "vue";
import menuIcon from "@/assets/icons/icons8-menue-abgerundet-100.png";
import closeIcon from "@/assets/icons/icons8-loeschen-100.png";

const open = ref(false);

// const props = defineProps({
//   open: Boolean,
// });

const toggleBurger = () => {
  open.value = !open.value;
  console.log(open.value);
};

const isActive = (path) => {
  const route = useRoute();
  return route.path === path;
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
