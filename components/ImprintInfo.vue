<template>
  <div class="imprint fixed bottom-5 right-5">
    <ul class="flex-col my-0">
      <li class="item-none">
        <NuxtLink to="/datenschutz"> Datenschutzhinweise </NuxtLink>
      </li>
      <li class="item-none">
        <NuxtLink to="/imprint">Impressum</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imprint {
  padding: 8px 30px 10px 20px;
  border: 1px solid #000000;
  box-shadow: 2px 3px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}

li {
  list-style: none;
}
</style>
