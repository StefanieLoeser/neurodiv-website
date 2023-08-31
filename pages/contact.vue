<template>
  <div class="">
    <h2 class="text-head">Kontakt</h2>
    <form
      class="flex flex-col gap-4 p-5 mb-10 text-sm font-sans border border-black border-solid rounded-tl-sm rounded-tr-lg rounded-br-lg rounded-bl-lg"
      @submit.prevent="submitForm"
    >
      <div class="">
        <!-- <label for="name" class="mb-2 block">Name</label> -->
        <!-- flex flex-col mb-4 -->
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Name"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <!-- <label for="email" class="block mb-2">E-Mail</label> -->
        <input
          type="email"
          id="email"
          placeholder="E-Mail"
          v-model="form.email"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <!-- <label for="subject" class="block mb-2">Betreff</label> -->
        <input
          type="text"
          id="subject"
          placeholder="Betreff"
          v-model="form.subject"
          class="block w-full px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        />
      </div>
      <div class="">
        <!-- <label for="message" class="block mb-2">Nachricht</label> -->
        <textarea
          id="message"
          placeholder="Nachricht"
          v-model="form.message"
          class="block resize-y w-full min-h-[5rem] px-2 py-1 border border-gray-300 leading-4 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange border-black"
        ></textarea>
      </div>
      <div class="mb-4">
        <div class="flex flex-row justify-between">
          <label for="interest" class="inline-flex items-baseline">
            <input
              type="checkbox"
              id="interest"
              v-model="form.interest"
              class="h-4 w-4 relative top-2 text-orange border border-black rounded"
            />
            <span
              class="ml-2 hyphens-auto font-sans font-medium text-gray-700 leading-4"
              >Interesse an<br />
              Infos zu einer<br />Mitgliedschaft?</span
            >
          </label>
          <div>
            <button
              type="submit"
              class="px-6 py-2 relative top-1 frame-s bg-orange"
            >
              senden
            </button>
          </div>
        </div>
      </div>
    </form>

    <div>
      <div v-if="!mitgliedWerden || !mitgliedWerden.acf">Loading...</div>
      <div v-else class="pb-10">
        <h2 class="text-head">{{ mitgliedWerden.acf?.title }}</h2>

        <div v-html="mitgliedWerden.acf?.mitgliedWerden"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const store = usePagesStore();

store.fetchPages();

const mitgliedWerden = computed(() => store.getPageById(95));

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
  interest: false,
});

const fetchNonce = async () => {
  const nonceResponse = await fetch(
    "https://neurodiversegemeinschaft.de/wp-json/email-sender-custom/v1/get-nonce/"
  );
  const nonce = await nonceResponse.text();
  return nonce;
};

const submitForm = async () => {
  console.log(form.value);
  try {
    const nonce = await fetchNonce();
    console.log("nonce", nonce);

    const formData = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      my_form_nonce: nonce,
    };

    const response = await fetch(
      "https://neurodiversegemeinschaft.de/wp-json/email-sender-custom/v1/send/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("Response", response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    // You can also add some user feedback here, like a success message or error message based on the response.
  } catch (error) {
    console.error("There was an error submitting the form:", error);
    // Here you can handle the error, for example, show an error message to the user.
  }
};
</script>
