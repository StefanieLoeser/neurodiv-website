<template>
  <div class="max-w-80 h-screen fixed inline-block flex-row">
    <div
      class="logo font-bold font-sans text-left inline-block h-screen self-center"
    >
      <h1 class="color">Unsere Zukunft<br />ist neurodivers.</h1>
      <h1>Neurodiverse<br />Gemeinschaft</h1>
    </div>
    <SocialMedia />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 0;
}

.logo {
  /* font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left; */
  font-size: 38px;
  line-height: 44px;
}

.color {
  color: #801dff; /* Adjust the color as needed */
}
</style>
