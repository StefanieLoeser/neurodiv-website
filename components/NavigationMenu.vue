<template>
  <div class="h-screen">
    <nav class="navigation">
      <ul class="menu">
        <li :class="{ 'menu-item': true }">
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li :class="{ 'menu-item': true }">
          <NuxtLink to="/about">Über uns</NuxtLink>
        </li>
        <li :class="{ 'menu-item': true }">
          <NuxtLink to="/contact">Kontaxt</NuxtLink>
        </li>
        <li :class="{ 'menu-item': true }">
          <NuxtLink to="/blog">Blog</NuxtLink>
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
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    // isActive(route) {
    //   return this.$route.path === route;
    // },
  },
};
</script>
<style scoped>
.navigation {
  font-family: "Inter", sans-serif;
  font-weight: medium;
  text-align: left;
  padding: 5px;
  width: 180px;
  position: absolute;
  top: 50px;
  right: 0;
}

.menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin: 10px;
}

.menu-item:last-child {
  margin-bottom: 0;
}

.menu-item a {
  text-decoration: none;
  color: #000;
  font-weight: normal;
  font-size: 16px;
}

.menu-item.active a {
  color: #ff0000; /* Adjust the color for active links */
}
</style>
