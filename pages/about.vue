<template>
  <div class="pb-10">
    <h2 class="text-head">Über uns</h2>

    <div class="flex flex-col gap-10">
      <p class="text-serif" lang="de">
        Anfang 2022 haben wir – das sind Giancarlo (31), Katharina (30) und
        Johanna (29) – die Neurodiverse Gemeinschaft e. V. in Berlin gegründet.
        Unser Verein richtet sich an neurodivergente Menschen und wir setzen uns
        für die Selbsthilfe und Selbstermächtigung ein. Außerdem wollen wir
        Möglichkeiten zum Austausch und zur Vernetzung schaffen und fördern
        sowie Informationen sammeln und bereitstellen. Zentrale Themen, die uns
        beschäftigen, sind u. a. Ausbildung, Beruf, Beziehungen,
        Alltagsbewältigung, Vernetzung, Unabhängigkeit, psychische Gesundheit,
        Repräsentation, Selbstinteressenvertretung, Anti-Diskriminierung,
        Dis/Ability Rights, LGBTQ+ und Queerness.
      </p>
      <div
        v-for="person in teamMembers"
        :key="person.name"
        class="flex flex-col gap-10"
      >
        <TeamMember :person-img="person.img" :person-intro="person.intro" />
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: "Giancarlo",
    img: "./images/DSC2884.jpeg",
    intro:
      "Giancarlo (sier/sien) ist eine nette Person, die sich viel Mühe gibt, um netter zu werden. Sier arbeitet bei Special Circumstances, ein »Think-Tank für Forschung und Entwicklung«, wo Software mittels eines linguistischen Ansatzes verbessert werden kann. Giancarlo schreibt über Filme, liest viel, und ist Mitbegründer*in der Neurodiversen Gemeinschaft. Außerdem kommt Sier aus Peru, mag Katzen und forscht in Film, Medien und Kulturwissenschaft in Birkbeck, University of London. (GS)",
  },
  {
    name: "Katharina",
    img: "./images/Katharina_klein-768x1151.jpeg",
    intro:
      "Katharina (they/sie) ist irgendwo zwischen reserviert und warmherzig. Sie verdient ihr Geld mit ihrem Wissen über Essen und mit einstudierten sozialen Umgangsformen – konkreter: sie arbeitet in einem Feinkostladen. Außerdem kocht und backt sie für Freund*innen und manchmal auch Fremde. Sie hat in Edinburgh studiert und in Berlin als Beraterin gearbeitet, kurze Zeit war sie auch Doktorandin. Sie ist Autist*in und hat chronische Migräne – letzteres nervt, ersteres ist cool. Jetzt ist sie Mitbegründer*in der Neurodiversen Gemeinschaft. (KB)",
  },
  {
    name: "Johanna",
    img: "./images/Johanna_klein-768x1151.jpeg",
    intro:
      "Johanna (sie/they) ist eine Person, die gerne zu viel redet, singt und Wortwitze macht. Wenn sie nicht gerade mit allem überfordert, wütend und genervt ist und die Energie für soziale Interaktionen mal nicht fehlt, spielt sie Brettspiele mit Freund*innen und verbringt laute Abende in unangenehm verrauchten Bars. Sie hat Theater-, Film- , Medien- und Kulturwissenschaft in Wien und Berlin studiert und macht gerade ein Volontariat in der Hochschulkommunikation der HfS Ernst Busch. Bisher hat sie keine Diagnose, aber sie identifiziert sich als neurodivergent und ist Mitbegründer*in der Neurodiversen Gemeinschaft. (JM)",
  },
];
</script>

<style></style>
