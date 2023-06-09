<template>
  <div class="h-screen">
    <nav class="navigation">
      <ul class="menu">
        <li :class="{ 'menu-item': true, active: isActive('/') }">
          <NuxtLink to="/" exact>
            <template v-if="isActive('/')">
              <img
                class="arrow"
                src="../public/assets/icons8-down-left-arrow-48.png"
                alt="Arrow"
              /> </template
            >Startseite
          </NuxtLink>
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/about') }">
          <NuxtLink to="/about">
            <template v-if="isActive('/about')">
              <img
                class="arrow"
                src="../public/assets/icons8-down-left-arrow-48.png"
                alt="Arrow"
              /> </template
            >Über uns</NuxtLink
          >
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/contact') }">
          <NuxtLink to="/contact">
            <!--
            >{{ isActive("/contact") ? "> " : "" }}
            -->
            <template v-if="isActive('/contact')">
              <img
                class="arrow"
                src="../public/assets/icons8-down-left-arrow-48.png"
                alt="Arrow"
              /> </template
            >Kontakt</NuxtLink
          >
        </li>
        <li :class="{ 'menu-item': true, active: isActive('/blog') }">
          <NuxtLink to="/blog"
            ><template v-if="isActive('/blog')">
              <img
                class="arrow"
                src="../public/assets/icons8-down-left-arrow-48.png"
                alt="Arrow"
              /> </template
            >Blog</NuxtLink
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
  width: 200px;
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
  /* width: 200px; */
  height: 40px;
  padding: 8px 30px 10px 20px;
  background: #4af2eb;
  border: 1px solid #000000;
  box-shadow: 1px 2px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}

.arrow {
  display: inline-block;
  width: 20px;
  height: auto;
  rotate: 180deg;
  margin-right: 10px;
  position: relative;
  top: -1px;
}
</style>
