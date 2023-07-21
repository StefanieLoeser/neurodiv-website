<template>
  <div class="">
    <h2 class="text-head">Kontakt</h2>
    <form
      class="flex flex-col gap-4 p-5 text-sm font-sans border border-black border-solid rounded-tl-sm rounded-tr-lg rounded-br-lg rounded-bl-lg"
      @submit.prevent="submitForm"
    >
      <div class="">
        <label for="name" class="mb-2 block">Name</label>
        <!-- flex flex-col mb-4 -->
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <label for="email" class="block mb-2">E-Mail</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <label for="subject" class="block mb-2">Betreff</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <label for="message" class="block mb-2">Nachricht</label>
        <textarea
          id="message"
          v-model="form.message"
          class="block w-full h-30 px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        ></textarea>
      </div>
      <div class="mb-4">
        <div class="flex flex-row justify-between">
          <label for="interest" class="inline-flex items-baseline">
            <input
              type="checkbox"
              id="interest"
              v-model="form.interest"
              class="h-4 w-4 relative top-1 text-orange border border-black rounded"
            />
            <span
              class="ml-2 hyphens-auto font-sans font-medium text-gray-700 leading-"
              >Interesse an<br />
              Infos zu einer<br />Mitgliedschaft?</span
            >
          </label>
          <div>
            <button
              type="submit"
              class="w-auto h-auto px-6 py-2 relative top-1 text-black frame-s bg-orange font-sans text-sm"
            >
              senden
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
  interest: false,
});

const submitForm = () => {
  console.log(form.value);
};
</script>

<style></style>
