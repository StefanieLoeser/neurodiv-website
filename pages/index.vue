<template>
  <div class="snap-mandatory snap-y">
    <Logo
      :class="'m-auto sm:hidden h-screen items-center justify-center relative bottom-20'"
    />
    <div v-if="startseite !== undefined">
      <h2 class="hidden md:block font-bold text-lg mb-5">
        {{ startseite?.acf?.titel }}
      </h2>
      <div
        class="snap-start flex flex-col gap-10 pb-10 items-center justify-center"
      >
        <div
          class="m-5 md:mx-0 md:my-5"
          lang="de"
          v-html="startseite.acf.intro"
        ></div>

        <!-- Agenda Columns  -->

        <div
          class="flex flex-col md:grid md:grid-cols-[30%_30%_40%] gap-3 md:gap-10 items-center md:items-start justify-center w-2/3 md:w-auto md:px-16 border border-black border-solid rounded-tl-sm rounded-tr-md rounded-br-md rounded-bl-md"
        >
          <div class="flex flex-col my-5 gap-3 items-center justify-center">
            <h3 class="my-0">
              {{ startseite?.acf?.ziele1title }}
            </h3>
            <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
            <ul class="text-center font-sans">
              <li v-for="item in ziele1" class="list-none">{{ item }}</li>
            </ul>
          </div>
          <div class="flex flex-col my-5 gap-3 items-center justify-center">
            <h3 class="my-0">
              {{ startseite?.acf?.ziele2title }}
            </h3>
            <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
            <ul class="text-center font-sans">
              <li v-for="item in ziele2" class="list-none">{{ item }}</li>
            </ul>
          </div>
          <div class="flex flex-col my-5 gap-3 items-center justify-center">
            <h3 class="my-0">
              {{ startseite?.acf?.ziele3title }}
            </h3>
            <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
            <ul class="text-center font-sans">
              <li v-for="item in ziele3" class="list-none">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Agenda Columns End -->

        <!-- Was wir wollen -->
        <div
          class="m-5 md:mx-0 md:my-5"
          lang="de"
          v-html="startseite.acf.wasWirWollen"
        ></div>
        <!-- Was wir wollen 2 -->
        <div
          class="m-5 md:mx-0 md:my-5"
          lang="de"
          v-html="startseite.acf.wasWirWollen2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = usePagesStore();

store.fetchPages();

const startseite = computed(() => store.getPageById(19));

watch(startseite, () => {
  console.log("startseite", startseite.value);
  console.log("list", splitData(startseite.value.acf?.ziele1));
  console.log(ziele1.value);
});

const splitData = (data) => {
  return data.split("<br />").map((item) => item.trim());
};
const ziele1 = computed(() => splitData(startseite.value.acf?.ziele1));
const ziele2 = computed(() => splitData(startseite.value.acf?.ziele2));
const ziele3 = computed(() => splitData(startseite.value.acf?.ziele3));
</script>

<style scoped></style>
