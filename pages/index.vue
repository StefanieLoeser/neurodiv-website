<template>
  <div class="flex-col gap-10 snap-mandatory snap-y">
    <Logo :class="'m-auto md:hidden h-screen'" />
    <div
      class="snap-start flex pb-10 flex-col items-center justify-center gap-10 z-1"
    >
      <h2 class="hidden md:block font-bold text-lg mb-5">Startseite</h2>
      <p class="font-serif">
        Die Neurodiverse Gemeinschaft e.V. ist ein gemeinnütziger Verein, der
        sich für die Selbstermächtigung und Selbsthilfe von neurodiversen
        Menschen einsetzt. Wir wollen neurodiversen Menschen Raum geben, um
        ihren Wert als Menschen, als Gruppe, als Teil dieser Gesellschaft zu be-
        und ergreifen. Wir verstehen neurodiverse Konditionen als die
        Lebensumstände von vollwertigen Menschen und nicht als etwas, was zu
        heilen oder zu “bewältigen” ist.
      </p>

      <!-- Agenda Columns  -->

      <div
        class="flex flex-col gap-10 items-center justify-center py-5 w-2/3 bg-transparent border border-black border-solid rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-md"
      >
        <div class="flex flex-col gap-5 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Anliegen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-[#FF8A00]" />
          <ul class="text-center font-sans">
            <li>Selbsthilfe</li>
            <li>Information</li>
            <li>Austausch</li>
            <li>Netzwerk</li>
          </ul>
        </div>
        <div class="flex flex-col gap-5 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Themen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-[#FF8A00]" />
          <ul class="text-center font-sans">
            <li>Ausbildung</li>
            <li>Beruf</li>
            <li>Alltag</li>
            <li>Gesundheit</li>
          </ul>
        </div>
        <div class="flex flex-col gap-5 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Anliegen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-[#FF8A00]" />
          <ul class="text-center font-sans">
            <li>Repräsentation</li>
            <li>Unabhängigkeit</li>
            <li>Dis/Ability Rights</li>
            <li>LGBTQ+ Rights</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
