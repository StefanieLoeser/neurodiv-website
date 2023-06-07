<template>
  <div class="h-screen">
    <nav class="navigation">
      <ul class="menu">
        <li :class="{ 'menu-item': true, active: isActive('/') }">
          <NuxtLink to="/" exact>
            {{ isActive("/") ? "> " : "" }}Startseite
          </NuxtLink>
          <!-- <NuxtLink to="/neurodiversity">
      Neurodiversität{{ isActive('/neurodiversity') ? '>' : '' }}
    </NuxtLink> -->
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/about') }">
          <NuxtLink to="/about"
            >{{ isActive("/about") ? "> " : "" }}Über uns</NuxtLink
          >
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/contact') }">
          <NuxtLink to="/contact"
            >{{ isActive("/contact") ? "> " : "" }}Kontakt</NuxtLink
          >
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/blog') }">
          <NuxtLink to="/blog"
            >{{ isActive("/blog") ? "> " : "" }}Blog</NuxtLink
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
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
<style scoped>
.navigation {
  font-family: "Inter", sans-serif;
  font-weight: medium;
  text-align: left;
  width: 230px;
  position: absolute;
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
  font-size: 18px;
}

.menu-item.active a {
  position: relative;
  left: -20px;
  width: 200px;
  height: 40px;
  padding: 10px 30px;
  background: #4af2eb;
  border: 1px solid #000000;
  box-shadow: 1px 2px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}
</style>
