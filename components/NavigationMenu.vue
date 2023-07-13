<template>
  <div>
    <div
      v-if="!isMobile"
      class="md:h-screen md:fixed md:right-5 md:top-10 flex-col font-sans"
    >
      <!-- Desktop Menu : -->

      <nav class="font-medium text-left w-48 absolute right-0">
        <ul
          class="list-none flex flex-col justify-center items-left p-0 m-0 space-y-4"
        >
          <li :class="{ 'menu-item': true, active: isActive('/') }">
            <NuxtLink to="/" exact class="flex items-center">
              <template v-if="isActive('/')"><Arrow class="mr-2" /></template
              ><span class="text-base">Startseite</span>
            </NuxtLink>
          </li>
          <li :class="{ 'menu-item': true, active: isActive('/about') }">
            <NuxtLink to="/about" class="flex items-center">
              <template v-if="isActive('/about')">
                <Arrow class="mr-2"
              /></template>
              <span class="text-base">Über uns</span>
            </NuxtLink>
          </li>
          <li :class="{ 'menu-item': true, active: isActive('/contact') }">
            <NuxtLink to="/contact" class="flex items-center">
              <template v-if="isActive('/contact')">
                <Arrow class="mr-2" /></template
              ><span class="text-base">Kontakt</span></NuxtLink
            >
          </li>
          <li :class="{ 'menu-item': true, active: isActive('/blog') }">
            <NuxtLink to="/blog" class="flex items-center"
              ><template v-if="isActive('/blog')">
                <Arrow class="mr-2" /></template
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
        --></ul>
      </nav>
      <ImprintInfo :isMobile="isMobile" />
    </div>

    <!-- Mobile Menu : -->
    <BurgerMenu :isMobile="isMobile" />
    <MobileMenuOverlay :isMobile="isMobile" />
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useWindowSize } from "@vueuse/core";

export default {
  setup() {
    const { width } = useWindowSize();
    const isMobile = ref(false);

    watchEffect(() => {
      isMobile.value = width.value < 380;
    });

    return {
      isMobile,
      width,
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
<style scoped>
.menu-item:last-child {
  margin-bottom: 0;
}

.menu-item a {
  text-decoration: none;
  color: #000;
  font-weight: normal;
  font-size: 18px;
}

.menu-item.active a {
  position: relative;
  left: -20px;
  padding: 8px 30px 10px 20px;
  background: #4af2eb;
  border: 1px solid #000000;
  box-shadow: 1px 2px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}
</style>
