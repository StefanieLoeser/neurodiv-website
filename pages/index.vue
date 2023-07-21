<template>
  <div class="snap-mandatory snap-y">
    <Logo
      :class="'m-auto sm:hidden h-screen items-center justify-center relative bottom-20'"
    />
    <h2 class="hidden md:block font-bold text-lg mb-5">Startseite</h2>
    <div
      class="snap-start flex flex-col gap-10 pb-10 items-center justify-center"
    >
      <p class="font-serif m-5 md:mx-0 md:my-5 break-words">
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
        class="flex flex-col gap-10 items-center justify-center py-10 w-2/3 sm:max-w-1/2 border border-black border-solid rounded-tl-sm rounded-tr-md rounded-br-md rounded-bl-md"
      >
        <div class="flex flex-col gap-3 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Anliegen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
          <ul class="text-center font-sans">
            <li>Selbsthilfe</li>
            <li>Information</li>
            <li>Austausch</li>
            <li>Netzwerk</li>
          </ul>
        </div>
        <div class="flex flex-col gap-3 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Themen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
          <ul class="text-center font-sans">
            <li>Ausbildung</li>
            <li>Beruf</li>
            <li>Alltag</li>
            <li>Gesundheit</li>
          </ul>
        </div>
        <div class="flex flex-col gap-3 items-center justify-center">
          <h3
            class="text-black text-lg font-inter font-bold leading-6 break-words"
          >
            Anliegen
          </h3>
          <Arrow :width="24" :height="24" class="rotate-45 text-orange" />
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
