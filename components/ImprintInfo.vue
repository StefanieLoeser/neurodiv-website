<template>
  <div class="imprint fixed bottom-5 right-5">
    <ul class="flex-col">
      <li>
        <NuxtLink to="/datenschutz"> Datenschutzhinweise </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/imprint">Impressum</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.imprint {
  padding: 8px 30px 10px 20px;
  border: 1px solid #000000;
  box-shadow: 2px 3px 1px #000000;
  border-radius: 1px 8px 8px 8px;
}
</style>
